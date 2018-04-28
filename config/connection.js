// Inside the connection.js file, setup the code to connect Node to MySQL
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'burgers_db'
});
 
connection.connect(function(err) {
  if (err) throw err.stack
  });

// Export the connection.
module.exports = connection;



