// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the items
  app.get("/api/items/", function(req, res) {
    db.Item.findAll({}).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // POST route for saving a new items
  app.post("/api/items", function(req, res) {
    console.log(req.body);
    db.Item
      .create({
        name: req.body.itemName,
        imgUrl: req.body.imgUrl,
        volunteer: req.body.volunteer
      })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  // DELETE route for deleting items
  // app.delete("/api/delete/item/:id", function(req, res) {
  //   db.Item
  //     .destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     })
  //     .then(function(dbItem) {
  //       res.json(dbItem);
  //     });
  // });
};
