// here its the function name
function makeGrid() {
  // define the Canvas Area
  var canvasArea = document.getElementById('pixelCanvas');
  // define the width value
  var width = document.getElementById('inputWidth').value;
  // define the height value
  var height = document.getElementById('inputHeight').value;

  // to clear the row for fresh start
  while (canvasArea.rows.length > 0) {
    canvasArea.deleteRow(0);
   }


  // using for "Loop" to insert the height cells
  for (let i = 0; i < height; i++) {
    let hi = canvasArea.insertRow(i);

    // using for "Loop" to insert the height cells
    for (let b = 0; b < width; b++) {
      let wi = hi.insertCell(b);


      // insert the click event to the cells inserted above
      wi.addEventListener('click', function(event) {
        // here to make the cells read the color picked from the color picker
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

//-----------------------------------------------------------------------------

// define the event for :"submit" button
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  // once its submitted our function will be called :)
  makeGrid();
});

//-------------------------------The End --------------------------------------
