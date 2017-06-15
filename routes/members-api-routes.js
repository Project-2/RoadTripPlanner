var db = require("../models");

module.exports = function(app) {
	app.get("/api/members", function(req, res) {

		db.Trip.findAll({}).then(function(dbTrip){
			res.json(dbTrip);

		});
	});

	app.post("/api/members", function(req, res) {

		db.Trip.create({
			member: req.body.name,
			car: req.body.name,
			ride: req.body.name
		}).then(function(dbTrip) {
			res.json(dbTrip);
		});
	});

	app.put("/api/members", function(req, res) {
		db.Trip.update({
			member: req.body.name,
			car: req.body.car,
			ride: req.body.ride
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbTrip) {
			res.json(dbTrip);
		});
	});

};