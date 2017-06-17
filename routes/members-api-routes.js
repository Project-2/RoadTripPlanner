var db = require("../models");

module.exports = function(app) {
    app.get("/api/members", function(req, res) {


        db.Member.findAll({}).then(function(dbTrip) {
            res.json(dbTrip);

        });
    });

    app.post("/api/members", function(req, res) {
        console.log("inside post");
        db.Member.create({
            member: req.body.member,
            email: req.body.email,
            car: req.body.car,
            ride: req.body.ride,
            carSeats: req.body.carSeats
        }).then(function(dbTrip) {
            res.json(dbTrip);
        });
    });



//Put for updating if a member has a car and how many seats available
    app.put("/api/members", function(req, res) {
    	var memberName = req.body.member;
		var carSeats = req.body.carSeats;
        db.Member.update({
        		car: 1,
                carSeats: carSeats
               
            }, {
                where: { member: memberName }
            })
            .then(function(Member) {
            	res.json(Member);
            });
    });
};
