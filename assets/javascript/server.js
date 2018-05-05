//Creating an app for patient forms (new and returning)


var express = require('express');
var bodyParser = require('body-parser');


var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

vvar mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "patient_form-db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });


  /*


//CODE HERE//


*/

app.get("/newPatient", function(req, res){
    connection.query("SELECT * FROM newForm", function(err, data){
        if (err){
            return res.status(500).end();
        }

        res.json({});
        console.log({});
    });
});

app.get("/returningPatient", function(req, res){
    connection.query("SELECT * FROM returnForm", function(err, data){
        if (err){
            return res.status(500).end();
        }

        res.json({});
        console.log({});
    });
});

app.listen(PORT, function(){
      console.log("Server listening on: http://localhost:" + PORT);
  });
