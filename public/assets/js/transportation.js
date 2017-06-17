$("#addCar").on("click", function(event) {
 

  var carData = {

    member: $("#username").val().trim(),
  
    carSeats: $("#seats").val().trim()
  
  };

//submitAddCar on click 
// make an update that does this:

//Update members where username = carData.member
// car set to true
 //seats set to 
// send an AJAX POST-request with jQuery

  $.post("/api/members", carData)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding car to trip...");
    });

 location.reload(true);
  

});

$("#chooseRide").on("click", function (event){

      var rideData = {

        member: $("#username").val().trim(),

        ride: $("#car").val().trim()
      };
});