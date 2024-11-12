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

        square.addEventListener("mouseenter", (event) => {
            // event.target.classList.add("hover");
            event.target.style.backgroundColor = currentColor;
        })
    }
}


function changeColor(newColor) {
    currentColor = newColor;
}


function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




// Event listeners
gridSizeButton.addEventListener("click", () => {
    getGridSize();
})


addEventListener("load", (event) => {
    buildGrid(199, 16);
});

colorSelector.addEventListener("input", (event) => {
    currentColor = event.target.value;
})

resetButton.addEventListener("click", (event) => {
    for (const cell of container.children) {
        // Do something with childElement
        cell.style.backgroundColor = "white";
    }
})