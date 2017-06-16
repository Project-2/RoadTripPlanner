$("#submit").on("click", function(event) {



  var newMember = {
   
    member: $("#member").val().trim(),
   
    email: $("#email").val().trim(),

    car: 0,
    
    ride: 0,

    carSeats: 0
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/members", newMember)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding member to trip...");

      location.reload(true);
    });


  

});