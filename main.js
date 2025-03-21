const boxes = document.querySelectorAll(".child");
const colorInput = document.querySelector("#color-input");
let color = "red";
let isMousePress = false;

document.onmousedown = turnOnDrawing;

document.onmouseup = turnOffDrawing;
function turnOnDrawing() {
  isMousePress = true;
}
function turnOffDrawing() {
  isMousePress = false;
}
colorInput.onchange = changeColor;
function changeColor() {
  color = colorInput.value;
}

for (let i = 0; i <= 169; i++) {
  boxes[i].addEventListener("mouseenter", colorBox);
}
function colorBox(event) {
  if (isMousePress) {
    event.target.style.backgroundColor = color;
  }
}
function activateEraser() {
  color = "white";
  for (let i = 0; i <= 169; i++) {
    boxes[i].style.backgroundColor = "white";
  }
}
