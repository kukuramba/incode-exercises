const mySquare = document.getElementById("square");

mySquare.addEventListener("mouseover", squareRed);
mySquare.addEventListener("mouseout", squareBlue);

function squareRed() {
    mySquare.style.backgroundColor = "red";
}

function squareBlue() {
    mySquare.style.backgroundColor = "blue";
}