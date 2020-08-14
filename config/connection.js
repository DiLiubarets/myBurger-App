const mysql = require("mysql");
const dbConfig = require("../db.config")

var con = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
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
