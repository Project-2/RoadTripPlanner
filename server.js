var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//packages
var PORT = process.env.PORT || 3000; //connects to port 

var app = express();
var db = require("./models");// gets my models 


app.use(bodyParser.json());
app.use(bodyParser.text());
// imports my files from my public folder (css)

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


// db.sync({force: true})

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




require("./routes/html-routes.js")(app);
require("./routes/trip-api-routes.js")(app);
require("./routes/members-api-routes.js")(app);
require("./routes/list-api-routes.js")(app);

db.sequelize.sync({force: true}).then(function() {
	app.listen(PORT, function(){
		console.log("Listening on PORT " + PORT);
	});
});