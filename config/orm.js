const connection = require("./connection");

// Print questionmarks in the query string
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) { arr.push("?") }
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		var value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

// ORM Declaration

var orm = {
	all: function (tableInput, cb) {
		var queryString = `SELECT * FROM ${tableInput}`;
		// var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function (table, cols, vals, cb) {
		var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES(${printQuestionMarks(vals.length)})`;
		console.log(queryString);
		connection.query(queryString, [vals], function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// An example of objColVals would be {name: panther, sleepy: true}
	update: function (table, objColVals, condition, cb) {
		var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ?`;

		console.log(queryString);
		connection.query(queryString, condition, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// Delete method
	delete: function (table, condition, cb) {
		var queryString = `DELETE FROM ${table} WHERE ?`;
		console.log(queryString);
		connection.query(queryString, [condition], function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	//Joined tables
	joinSelect: function (condition, cb) {
		var queryString = `SELECT stis.name as STI, sti_rates.sti_cases as Cases FROM ((states INNER JOIN sti_rates ON states.id = sti_rates.state_id) INNER JOIN stis ON sti_rates.sti_id = stis.id) WHERE ?`
		connection.query(queryString, [condition], function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	} 
};
// Export the orm object for the model.
module.exports = orm;