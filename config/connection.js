// import mysql
const mysql = require("mysql2");

// create mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  // username
  user: "root",
  // password
  password: "password",
  database: "employee_db",
});

// if error return error
connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
