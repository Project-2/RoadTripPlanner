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
 //  $.post("/api/members", carData)
 //    // on success, run this callback
 //    .done(function(data) {
 //      // log the data we found
 //      console.log(data);
 //      // tell the user we're adding a character with an alert window
 //      alert("Adding car to trip...");
 //    });

 // location.reload(true);
  

});

$("#chooseRide").on("click", function (event){

      var rideData = {

        member: $("#username").val().trim(),

        ride: $("#car").val().trim()
      };
});
