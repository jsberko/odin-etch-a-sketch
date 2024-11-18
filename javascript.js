// Selectors
const selectGridSizeButton = document.querySelector("#gridSize");
const clearButton = document.querySelector("#clear");
const toggleCellBorderButton = document.querySelector("#toggleCellBorder");
const gridContainer = document.querySelector(".grid-container");
const colorSelector = document.querySelector("#color");




// Variable
let currentColor = "#000000";




// Functions
function getGridSize() {
    let userInput;

    while (true) {
        userInput = prompt("Please enter a number between 1 and 100:", 40);

        if (userInput === null) {
            break;
        }

        userInput = parseInt(userInput);

        if (!isNaN(userInput) && userInput > 0 && userInput <= 100) {
            let gridSize = userInput ** 2;
            calculateCellSize(userInput, gridSize)
            break;
        } else {
            alert("Invalid input. Please enter a number between 1 and 100:");
        }
    }
}


function calculateCellSize(userInput, gridSize) {
    let cellSize = getScreenSize() / userInput;

    resetGrid(cellSize, gridSize);
}


function getScreenSize() {
    if (gridContainer.clientWidth < 596) {
        return 396;
    } else {
        return 596;
    }
}


function resetGrid(cellSize, gridSize) {
    emptyGridContainer();
    buildGrid(cellSize, gridSize);
}


function emptyGridContainer() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function buildGrid(cellSize, gridSize) {
    for (let i = 1; i <= gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", "cell-border");

        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        gridContainer.append(cell);
    }
}


function styleCell(event) {
    event.target.style.backgroundColor = currentColor;
}


function startDrawing() {
    for (const cell of gridContainer.children) {
        cell.addEventListener("mouseover", styleCell);
        cell.addEventListener("touchmove", styleCell);
    }
}


function stopDrawing() {
    for (const cell of gridContainer.children) {
        cell.removeEventListener("mouseover", styleCell);
        cell.removeEventListener("touchmove", styleCell);
    }
}


function toggleCellBorder() {
    for (const cell of gridContainer.children) {
        cell.classList.toggle("cell-border");
    }
}


function getInitialScreenSize() {
    if (gridContainer.clientWidth < 596) {
        return 396 / 4;
    } else {
        return 596 / 4;
    }
}


// Event listeners
document.addEventListener("DOMContentLoaded", () => buildGrid(getInitialScreenSize(), 16));


selectGridSizeButton.addEventListener("click", () => {
    getGridSize();
})


toggleCellBorderButton.addEventListener("click", () => {
    toggleCellBorder();
})


clearButton.addEventListener("click", (event) => {
    if (confirm("Clear the current grid?")) {
        currentColor = "#000000";
        colorSelector.value = "#000000";

        for (const cell of gridContainer.children) {
            cell.style.backgroundColor = "white";
        }
    }
})


colorSelector.addEventListener("input", (event) => {
    currentColor = event.target.value;
})


// Mouse Event Drawing Listeners 
gridContainer.addEventListener("mousedown", () => {
    startDrawing();
})

gridContainer.addEventListener("mouseup", () => {
    stopDrawing();
})

gridContainer.addEventListener("mouseleave", () => {
    stopDrawing();
})

// Touch Event Drawing Listeners 
gridContainer.addEventListener("touchstart", (event) => {
    event.preventDefault();
    startDrawing();
})

gridContainer.addEventListener("touchmove", (event) => {
    event.preventDefault();
})

gridContainer.addEventListener("touchend", () => {
    stopDrawing();
})

// gridContainer.addEventListener("mouseleave", () => {
//     stopDrawing();
// })