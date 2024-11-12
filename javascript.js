// Selectors
const container = document.querySelector(".container");
const gridSizeButton = document.querySelector("#gridSize");
const colorSelector = document.querySelector("#color");
const resetButton = document.querySelector("#reset");

// Variables
let currentColor = "#000000";


// Functions
function getGridSize() {
    let userInput = parseInt(prompt("Enter a number between 1-100"));
    let gridSize = userInput * userInput;

    while (isNaN(userInput) || !userInput || userInput < 1 || userInput > 100) {
        userInput = prompt("Invalid input. Please enter a number between 1-100");
    }

    getSquareSize(userInput, gridSize);
}


function getSquareSize(userInput, gridSize) {
    let squareSize = 796 / userInput

    resetGrid(squareSize, gridSize);
}


function resetGrid(squareSize, gridSize) {
    removeAllChildren(container);
    buildGrid(squareSize, gridSize);
}


function buildGrid(squareSize, gridSize) {
    for (let i = 1; i <= gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.append(square);
    }
}


function changeColor(newColor) {
    currentColor = newColor;
}

function changeCellColor(cell) {
    cell = currentColor;
}


function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function startDrawing() {
    for (const cell of container.children) {
        cell.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = currentColor;
        });
    }
}





// Event listeners
addEventListener("load", (event) => {
    buildGrid(199, 16);
});

gridSizeButton.addEventListener("click", () => {
    getGridSize();
})

colorSelector.addEventListener("input", (event) => {
    currentColor = event.target.value;
})

resetButton.addEventListener("click", (event) => {
    currentColor = "#000000";
    colorSelector.value = "#000000";

    for (const cell of container.children) {
        cell.style.backgroundColor = "white";
    }
})

container.addEventListener("mousedown", startDrawing);
