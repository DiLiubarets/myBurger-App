const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "Ukrayina91",
  database: "burgers_db",
  multipleStatements: true,
});
con.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

module.exports = con;
