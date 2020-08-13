const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

//Routes
router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    let allObject = {
      burgers: data,
    };

    res.render("index", allObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "Devoured"],
    [req.body.burger_name, req.body.devoured],

    function (result) {
      res.json({ id: result.insertID });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.updateOne({ devoured: req.body.devoured }, condition, function (
    result
  ) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
