const mysql = require('mysql');

var config;
if (process.env.JAWSDB_URL) {
	// Production Database Configuration
	config = process.env.JAWSDB_URL;
} else {
	// Develoment Database Configuration
	config = {
		host: process.env.MYSQL_HOST_DEVELOPMENT,
		port: process.env.MYSQL_PORT_DEVELOPMENT,
		user: process.env.MYSQL_USER_DEVELOPMENT,
		password: process.env.MYSQL_PASSWORD_DEVELOPMENT,
		database: process.env.MYSQL_DATABASE_DEVELOPMENT
	}
	// console.log(config);
}

var conn = mysql.createConnection(config);

conn.connect((err) => {
	if (err) {
		console.error(`Error connecting to MySQL: ${err.stack}`);
		return;
	}
	console.log(`Succesfully connected.\nPort:${config.port} Thread id: ${conn.threadId}`);
});

module.exports = conn;