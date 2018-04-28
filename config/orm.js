
var connection = require("./connection.js");

// var tableName = "burgers";

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(tableName, callback) {
    var q = "SELECT * FROM " + tableName;

    connection.query(q, function(err, result) {
        if (err) throw err;
        
        callback(result);

    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.
  insertOne: function(tableName, cols, vals, callback) {
    var qString = "INSERT INTO " + tableName;

    qString += " (";
    qString += cols.toString();
    qString += ") ";
    qString += "VALUES (";
    qString += printQuestionMarks(vals.length);
    qString += ") ";

    console.log(qString);

    connection.query(qString, vals, function(err, result) {
      if (err) throw err;

      callback(result);
    });
  },

  // burgerDets is an object
  updateOne: function(tableName, burgerDets, callback) {
    var q = "UPDATE " + tableName + " SET devoured=? WHERE id=?";

    connection.query(q, [ burgerDets.devoured, burgerDets.id], function (err, result) {
        if (err) throw err;

         callback(result);
    });
  }

};

module.exports = orm;