const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "YOUR PASSWORD",
  database: "burgers_db",
  multipleStatements: true,
});
con.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + con.threadId);
});
module.exports = con;
