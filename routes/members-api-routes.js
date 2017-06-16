var db = require("../models");

module.exports = function(app) {
	app.get("/api/members", function(req, res) {
		console.log("INSIDE GIT");

		db.Member.findAll({}).then(function(dbTrip){
			res.json(dbTrip);

		});
	});

	app.post("/api/members", function(req, res) {
		console.log("inside post")
		db.Member.create({
			member: req.body.member,
			email: req.body.email,
			 car: 0,
			ride: 0
		}).then(function(dbTrip) {
			res.json(dbTrip);
		});
	});

	app.delete("/api/members/:id", function(req, res) {

		db.Member.destroy({
			where: {
			   id: req.params.id
			}
		}).then(function(dbTrip) {
			res.json(dbTrip)
		});
	});

	app.put("/api/members", function(req, res) {
		db.Member.update({
			member: req.body.member,
			email: req.body.email
		}, {
			where: {
				member: req.body.member
			}
		}).then(function(dbTrip) {
			res.json(dbTrip);
		});
	});

};