const container = document.querySelector(".container");
const gridSizeButton = document.querySelector("#gridSize");

// let gridSize = 0;

for (let i = 1; i <= 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = "239px";
    square.style.height = "239px";

    container.append(square);

    square.addEventListener("mouseenter", (event) => {
        event.target.classList.toggle("highlight");
    })

    square.addEventListener("mouseleave", (event) => {
        event.target.classList.toggle("highlight");
    })
}


// Functions

function getGridSize() {
    console.log("getGridSize called");
    let userInput = parseInt(prompt("Enter a number between 1-100"));
    let gridSize = userInput * userInput;

    while (isNaN(userInput) || !userInput || userInput < 1 || userInput > 100) {
        userInput = prompt("Invalid input. Please enter a number between 1-100");
    }
    console.log(userInput, gridSize);
    getSquareSize(userInput, gridSize);
}

function getSquareSize(userInput, gridSize) {
    console.log("getSquareSize called");
    let squareSize = 956 / userInput
    resetGrid(squareSize, gridSize);
}

function resetGrid(squareSize, gridSize) {
    console.log("resetGrid called");
    removeAllChildren(container);
    buildGrid(squareSize, gridSize);
}

function buildGrid(squareSize, gridSize) {
    console.log("buildGrid called");
    for (let i = 1; i <= gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.append(square);

        square.addEventListener("mouseenter", (event) => {
            event.target.classList.toggle("hover");
        })

        square.addEventListener("mouseleave", (event) => {
            event.target.classList.toggle("hover");
        })

        if (i === gridSize) {
            console.log("container.style.width");
            console.log("container.style.height");
            console.log("square.style.width");
            console.log("square.style.height");
        }
    }
}

function removeAllChildren(parent) {
    console.log("removeAllChildren called");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



// Event listeners

container.addEventListener

gridSizeButton.addEventListener("click", () => {
    //add contraints/validations
    // num = +prompt("Please enter a number between 1-100");
    // gridSize = num * num;
    // resetGrid();
    getGridSize();
})


// function changeColor() {
//     square.style.color = "black";
// }