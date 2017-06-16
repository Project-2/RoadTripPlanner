var db = require("../models");

module.exports = function(app) {
	app.get("/api/trips", function(req, res) {

		db.Trip.findAll({}).then(function(dbTrip){
			res.json(dbTrip);

		});
	});

	app.post("/api/trips", function(req, res) {

		db.Trip.create({
			name: req.body.name,
			date: req.body.date,
			destination: req.body.destination,
			email: req.body.email,
			password: req.body.password
		}).then(function(dbTrip) {
			res.json(dbTrip);
		});
	});

	

	// app.put("/api/trips", function(req, res) {
	// 	db.Trip.update({
	// 		name: req.body.name,
	// 		date: req.body.date,
	// 	}, {
	// 		where: {
	// 			id: req.body.id
	// 		}
	// 	}).then(function(dbTrip) {
	// 		res.json(dbTrip);
	// 	});
	// });

};