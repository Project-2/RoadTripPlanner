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

  // send an AJAX POST-request with jQuery
  $.post("/api/trips", newTrip)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
     
    });
    
    trip.date= new Date(Trip.date)
    date.tolocalestring();

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#date").val("");
  $("#destination").val("");
  $("#email").val("");
  $("#password").val("");

});