const mysql = require("mysql");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expHandleBars = require("express-handlebars");
app.engine("handlebars", expHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/burgers_controllers");
app.use(routes);


app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});