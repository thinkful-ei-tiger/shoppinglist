//add new item.
function shoppingListAddItem() {
  $("#js-shopping-list-form").submit(function (event) {
    event.preventDefault()

    //holds the value of item entered in listItem
    const listItem = $("#shopping-list-entry").val()
    //if listItem does not equal nothing adds it within the html with all the formating.
    if (listItem !== "") {
      $(".shopping-list").append(`<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
        `)
    }
    //resets the form input
    $("input[name=shopping-list-entry").val("")
  })
}

//check item and markout
function markItem() {
  $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
    $(this)
      .closest(".shopping-item-controls")
      .siblings(".shopping-item")
      .toggleClass("shopping-item__checked")
  })
}

//remove item
function removeItem() {
  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    $(this).closest("li").remove()
  })
}

$(shoppingListAddItem)
$(markItem)
$(removeItem)
