// Dependencies
const mysql = require("mysql");
const express = require("express");
var exphbs = require("express-handlebars");
let path = require("path");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const con = require("./config/connection.js");

// Use Handlebars to render the main index.html page
app.get("/", (req, res) => {
  con.query("SELECT * FROM burgers;", (err, data) => {
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { burgers: data });
  });
});

let routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
