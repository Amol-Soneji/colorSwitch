// your code here
let colorButton = document.getElementById("new-color-button");
colorButton.addEventListener("click", changeColor);
function changeColor() {
  let blueValue = Math.floor(Math.random() * 256);
  let redValue = Math.floor(Math.random() * 256);
  let greenValue = Math.floor(Math.random() * 256);
  console.log(`${blueValue}  blue`);
  console.log(`${greenValue}  green`);
  console.log(`${redValue}  red`);
  let theBody = document.getElementsByTagName("body")[0];
  theBody.style.background = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}
