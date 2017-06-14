var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // cms route loads cms.html
  app.get("/tripOverview", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tripOverview.html"));
  });

  // blog route loads blog.html
  app.get("/addMember", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addMember.html"));
  });

  app.get("/transportation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/transportation.html"));
  });

  app.get("/createTrip", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createTrip.html"));
  });


  app.get("/necessities", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/necessities.html"));
  });

  app.get("/createItemList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createItemList.html"));
  });

  app.get("/selectItems", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/selectItems.html"));
  });



};