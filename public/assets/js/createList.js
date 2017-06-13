$(document).ready(function(){
	//container that holds all of the items in the list
	var listContainer = $(".list-container");

	// Click events for the delete button
  $(document).on("click", "button.delete", handleItemDelete);

  var items;

  function getItems(){
  	$.get("api/items", function(data){
  		console.log("items", data);
  		ietms = data;
  		initializeRows();
  	})
  }


  // function to delete posts
  function deleteItem(id){
  	$.ajax({
  		method: "DELETE",
  		url: "api/items/" + id
  	})
  	.done(function(){
  		getItems();
  	})
  }

  getItems();

  // InitializeRows handles appending all of our items of our lisr 
  // blogContainer
  function initializeRows() {
    listContainer.empty();
    var itemsToAdd = [];
    for (var i = 0; i < items.length; i++) {
      itemsToAdd.push(createNewRow(items[i]));
    }
    itemsContainer.append(itemsToAdd);
  }

  function createNewRow(item){
 

  	var newItemRow = "<tr>";
  	var itemNameCol = "<td> <input type='checkboxItem id='" + item.id + "> <label for=" + item.id + ">" + item.itemName + "</label>" 
  	var imgUrlCol = "<td> <img src='" + item.imgUrl + "class='list-icon'></td>";
  	var volunteerCol = "<td>" + item.volunteer + "</td>";
    var deleteBtnRow = "<td> <button class='delete btn btn-danger'>x</button";

    newItemRow.append(itemNameCol);
    newItemRow.append(imgUrlCol);
    newItemRow.append(volunteerCol);
    newItemRow.append(deleteBtnRow);
    
    newItemRow.data("item", item);
    return newItemRow;

  }

})