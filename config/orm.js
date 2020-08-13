let connection = require("../config/connection");

const createQmarks = (input) => {
  let array = [];
  for (let i = 0; i < input; i++) {
    array.push("?");
  }
  return array.toString();
};

const translateSql = (ob) => {
  let arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
};

let orm = {
  selectAll: (table, cb) => {
    let query = "SELECT * FROM " + table + ";";

    connection.query(query, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: (table, cols, vals, cb) => {
    let query =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      createQmarks(vals.length) +
      ") ";

    console.log(query);
    connection.query(query, vals, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: (table, objColVals, condition, cb) => {
    let query =
      "UPDATE " +
      table +
      " SET " +
      translateSql(objColVals) +
      " WHERE " +
      condition;

    console.log(query);

    connection.query(query, function (err, res) {
      if (err)  throw err;
      cb(res);
    });
  },
  deleteOne: (table, condition, cb) => {
    let query = "DELETE FROM " + table + " WHERE " + condition;
    console.log(query);

    connection.query(query, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
};
module.exports = orm;
