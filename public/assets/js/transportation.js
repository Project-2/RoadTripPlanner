$("#addCar").on("click", function(event) {
 

  var carData = {

    member: $("#username").val().trim(),
  
    carSeats: $("#seats").val().trim()
  
  };

 function updateMember(carData) {
    $.ajax({
      method: "PUT",
      url: "/api/members",
      data: carData
    })
    .done(function() {
      location.reload(true);
    });
  }

  updateMember(carData);

});
//click function for the choose ride, cannot seem to capture the number of car seats
//availabe in that drivers car to be used in the api routes :(

$("#chooseRide").on("click", function (event){
 

      var rideData = {

        member: $("#usernameRider").val().trim(),

        driver: $("#carName").val().trim(),

        // carSeats: $("#carSeats")

      };

 function updateMember(rideData) {
    $.ajax({
      method: "PUT",
      url: "/api/memberscars",
      data: rideData
    })
    .done(function() {
      location.reload(true);
    });
  }

  updateMember(rideData);
});
