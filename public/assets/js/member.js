$("#submit").on("click", function(event) {
 location.href = "/addMember";


  var newMember = {
   
    member: $("#member").val().trim(),
   
    email: $("#email").val().trim(),

    destination: $("#destination").val().trim(),
  
    car: $("#car").val().trim(),
    
    ride: $("#ride").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/members", newMember)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding member to trip...");
    });

  // empty each input box by replacing the value with an empty string
  $("#member").val("");
  $("#date").val("");
  $("#destination").val("");
  $("#email").val("");
  $("#password").val("");

});