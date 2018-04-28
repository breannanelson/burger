
var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();

// Import the model (cat.js) to use its database functions.

// Create all our routes and set up logic within those routes where required
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/burgers/:id", function (req, res) {

    burger.updateOne({
        devoured: true
    }, req.params.id, function (result) {
        console.log(result);

    });
});


// Export routes for server.js to use.
module.exports = router;
