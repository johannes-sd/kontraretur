const Connection = require("tedious").Connection;
var Request = require("tedious").Request;


var config = require("./../settings/databaseCreds"); //qredentials for database

var connection = new Connection(config);

connection.on('connect', (err) => {
    if (!err) {
        executeStatement();
    } else {
        console.log("Feil oppsto med melding ", err);
    }
});

// STATIC PARAMETER UNTIL AJAX IS SET UP
let sqlstring = require("./../queries/selectAddressData")('8910'); 

function executeStatement() {
    request = new Request(sqlstring, function(err, rowCount) {
        if (err) {
          console.log(err);
        } else {
          console.log(rowCount + ' rows');
          return;
        }
      });
  
      request.on('row', function(columns) {
        columns.forEach(function(column) {
          console.log(column.value);
        });
        return;
      });
  
      connection.execSql(request);
      return;
};