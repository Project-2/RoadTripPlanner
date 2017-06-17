//This is where the functionality for the homepage goes, button clicks, hrefs.... see author.js in activity 14 day 3 of sequelize$("#submit").on("click", function(event) {
 $("#submit").on("click", function(event) {
 location.href = "/tripOverview";
  // make a newTrip obj
  var newTrip = {
   
    name: $("#name").val().trim(),
   
    date: $("#date").val().trim(),
    destination: $("#destination").val().trim(),
    
    email: $("#email").val().trim(),
    
    password: $("#password").val().trim()
  };
    date.tolocalestring();
  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#date").val("");
  $("#destination").val("");
  $("#email").val("");
  $("#password").val("");
});