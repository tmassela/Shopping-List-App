$(function() {
    $("#js-shopping-list-form").submit(event => {
    // stop the default form submission behavior
    event.preventDefault();
   //create new variable from value in input box
    const newItem = $("#shopping-list-entry").val(),
    newListElement = `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
    //add newItem along with other controls to the ul
    $(".shopping-list").append(newListElement);
    //clear input box
    $('#shopping-list-entry').val("");
    }); 

      //when check button is clicked
      //select the span closest to the clicked check button &
     
      //add toggleclass to create strikethrough text
      //use 'ul' element here for event delegation, since some li are not there when page first loads
  $('ul').on('click', '.shopping-item-toggle', event => {
      $(event.currentTarget).closest("li").toggleClass('shopping-item__checked');
  });
   
  //when delete button is clicked, use event //delegation to delete the entire li
  $('ul').on('click', '.shopping-item-delete', event => {
      $(event.currentTarget).closest("li").remove();
  });

});
 
    
    
 
  
 