// Import the ORM
var orm = require("../config/orm");

var stiRate = {
	all: function (cb) {
		orm.all("sti_rates", function (res) {
			cb(res);
		});
	},
	// The variables cols and vals are arrays.
	create: function (cols, vals, cb) {
		orm.create("sti_rates", cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update("sti_rates", objColVals, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.delete("sti_rates", condition, function (res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller.
module.exports = stiRate;