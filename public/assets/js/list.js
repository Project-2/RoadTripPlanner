$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var listId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;



  // Getting jQuery references to the post body, title, form, and category select
  var nameInput = $("#itemName");
  var imgInput = $("#imgUrl");
  var submitButton = $(".submit-credentials");

  // Giving the postCategorySelect a default value

  // Adding an event listener for when the form is submitted
  $(".submit-items").on("click", function(event) 
  {
    event.preventDefault();
    // Wont submit the item if we are missing a body or a title
    if (!nameInput.val().trim() || !imgInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newItem = {
      itemName: nameInput.val().trim(),
      imgUrl: imgInput.val().trim(),
      volunteer: "query string of user"
    };

    console.log(newItem)

    // Otherwise run submitItem to create a whole new post
  
      submitItem(newItem);
   
  });

  // Submits a new post and brings user to blog page upon completion
  function submitItem(Item) {
    $.post("/api/items", Item, function() {
      window.location.href = "/necessities";
    });
  }


});
