// Import the ORM
var orm = require("../config/orm");

var state = {
	all: function (cb) {
		orm.all("states", function (res) {
			cb(res);
		});
	},
	// The variables cols and vals are arrays.
	create: function (cols, vals, cb) {
		orm.create("states", cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update("states", objColVals, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.delete("states", condition, function (res) {
			cb(res);
		});
	},
	selectOne: function (cols, condition, cb) {
		orm.selectOne("states", cols, condition ,function (res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller.
module.exports = state;