// Import the ORM
var orm = require("../config/orm");

var sti = {
	all: function (cb) {
		orm.all("stis", function (res) {
			cb(res);
		});
	},
	// The variables cols and vals are arrays.
	create: function (cols, vals, cb) {
		orm.create("stis", cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update("stis", objColVals, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.delete("stis", condition, function (res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller.
module.exports = sti;