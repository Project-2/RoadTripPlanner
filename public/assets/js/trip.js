$("#submit").on("click", function(event) {
 location.href = "/tripOverview.html";

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
      alert("Adding Trip...");
    });

    date.tolocalestring();

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#date").val("");
  $("#destination").val("");
  $("#email").val("");
  $("#password").val("");

});