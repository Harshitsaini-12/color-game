var numOf = 6;
var colors = [];

var squares = document.querySelectorAll(".square");
var pickedColor ;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var resetBtn = document.querySelector("#reset");

init()

function init(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
          modeButtons[0].classList.remove("selected");
          modeButtons[1].classList.remove("selected");
          this.classList.add("selected");
      
          if (this.textContent === "Easy") {
            numOf = 3;
          } else {
            numOf = 6;
          }
          reset();
        });
      }
      for (var i = 0; i < squares.length; i++) {
        // adding colors to squares
        squares[i].style.background = colors[i];
      
        // adding event listeners to squares
        squares[i].addEventListener("click", function () {
          var clickedColor = this.style.background;
      
          if (clickedColor === pickedColor) {
            messageDisplay.textContent = "correct!";
            resetBtn.textContent = "Play Again.";
            changeColors(clickedColor);
            heading.style.background = clickedColor;
          } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "try again!";
          }
        });
      }
      reset();
}





// reset function 
function reset() {
  colors = generateRandomColors(numOf);
  // pick a new random color from Array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  messageDisplay.innerHTML = "";
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  heading.style.background = "steelblue";
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

resetBtn.addEventListener("click", function () {
  reset();
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// change all colors
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

// for displaying color code
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// for genrating random color
function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    // pushes random color to array
    arr.push(randomColor());
  }
  return arr;
}

// produces a random color for the array
function randomColor() {
  var r = Math.floor(Math.random() * 256);

  var g = Math.floor(Math.random() * 256);

  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
