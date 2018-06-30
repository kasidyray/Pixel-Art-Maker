$(document).ready(function() {
  //Set grid current color to #000
  const theGrid = $("#pixelCanvas");
  let currentColor = "#000";

  // Prevent default submit event behaviour
  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    makeGrid();
    changeColor();
    addColor();
    removeGridColorOnDoubleClick()
    clearColor();
    clearGrid();
  });

  //Make grid function
  function makeGrid() {
    //Set the grid dimensions;
    let gridHeight = $("#inputHeight").val();
    let gridWidth = $("#inputWidth").val();
    theGrid.empty(); //Empty the grid and start over

    //Create rows
    for (let rows = 0; rows <= gridHeight - 1; rows++) {
      theGrid.append("<tr>"); //Start Row

      //Create columns for each row
      for (let columns = 0; columns <= gridWidth - 1; columns++) {
        $("tr").filter(":last").append("<td></td>");
      }
      theGrid.append("</tr>"); //End Row
    }
	
  }
  makeGrid();

  //Change the currentColor to the selected one
  function changeColor() {
    $("#colorPicker").change(function() {
      currentColor = $(this).val();
    });
  }
  changesColor();
  
//Fill grid with color
  function addColor() {
    theGrid.on("click", "td", function(e) {
      $(this).css("background-color", currentColor);
    });
  }
  addColor();

  //Remove color from grid on double-click
  function removeGridColorOnDoubleClick() {
    theGrid.on("dblclick", "td", function(e) {
      $(this).css("background-color", "");
    });
  }
  removeGridColorOnDoubleClick();

  //clear all colored grid
  function clearColor() {
    let clear = $("#clearColor");
    let targetCell = $("td");
    clear.on("click", function() {
      targetCell.removeAttr("style");
    });
  }
  clearColor();

  //clear all grid  
  function clearGrid() {
    let clearButton = $("#clearGrid");
    let actualgrid = $("tr");
    clearButton.on("click", function(){
      actualgrid.remove();
    });
  }
  clearGrid();

});
