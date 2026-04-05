let clickCount = 0;

const colors = ["lightcoral", "steelblue", "mediumseagreen", "goldenrod", "mediumpurple"];

// Select the elements we want to interact with
let colorBox = document.querySelector("#colorBox");
let boxText = document.querySelector("#boxText");
let mainHeading = document.querySelector("#mainHeading");

function handleClick() {
  clickCount = clickCount + 1;
  let newColor = colors[clickCount % colors.length];
  colorBox.style.backgroundColor = newColor;
  boxText.innerHTML = "Clicked " + clickCount + " time(s)!";
}

function handleHover() {
  mainHeading.innerHTML = "You're hovering! Now try clicking or pressing a key.";
}

function handleMouseOut() {
  mainHeading.innerHTML = "Hover over the box, click it, or press a key!";
}

function handleKeyDown(event) {
  document.body.style.backgroundColor = "lightblue";
  mainHeading.innerHTML = 'You pressed "' + event.key + '"! The background changed.';
}

colorBox.addEventListener("click", handleClick);

colorBox.addEventListener("mouseover", handleHover);

colorBox.addEventListener("mouseout", handleMouseOut);

document.addEventListener("keydown", handleKeyDown);
