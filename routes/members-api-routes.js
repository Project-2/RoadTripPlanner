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


    // app.put("/api/members", function(req, res) {
    // 	db.Member.update({
    // 		member: req.body.member,
    // 		email: req.body.email,
    // 		car: req.body.car,
    // 		ride: req.body.ride,
    // 		carSeats: req.body.carSeats
    // 	}, {
    // 		where: {
    // 			id: req.body.id
    // 		}
    // 	}).then(function(dbTrip) {
    // 		res.json(dbTrip);
    // 	});
    // });

    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
        db.Member.update(req.body.carSeats, {
                where: {
                    member: req.body.member
                }
            })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });
};




// 	app.put("api/members", function(req, res) {
//     var query = {};
//     if(req.query.member === carData.member) {
//         db.Member.update({
//             where: {
//                 car: req.body.car,
//                 carSeats: req.body.carSeats
//             }
//         });
//     }else{
//     	console.log("No!");
//     }
// });

// };
