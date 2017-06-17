var db = require("../models");

module.exports = function(app) {
    app.get("/api/members", function(req, res) {


        db.Member.findAll({}).then(function(dbTrip) {
            res.json(dbTrip);

        });
    });

    app.get("/api/memberscars", function(req, res) {


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

    //put for updating if a member has a car and how many seats in that car
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

    //Put for updating if a member has a ride 
    //not functioning right now - who's ride they are taking and how many seats are left in that ride
    
    app.put("/api/memberscars", function(req, res) {
        var memberName = req.body.member;
        var driverName = req.body.driver;	
       var numCarSeats = req.body.carSeats;
        
        db.Member.update({
                ride: 1, 
                driver: driverName           
            }, {
                where: { member: memberName }
            });
       
            db.Member.update({

                carSeats: numCarSeats

            }, {
                where: { member: driverName }
            })
            .then(function(Member) {
                res.json(Member);
                console.log(driverName);
            });
            
             
    });

// app.put("/api/memberscars", function(req, res) {
    	

    		

//         });
};



