
// grid element selection
const grid = document.querySelector("#grid");

// btn div
const btnDiv = document.createElement("div");
btnDiv.classList.add("btnDiv");
grid.appendChild(btnDiv);

// size button element creation
const sizeBtn = document.createElement("button");
sizeBtn.classList.add("btn");
sizeBtn.textContent = "Size";
btnDiv.appendChild(sizeBtn);

// random clor btn creation
const randomColorBtn = document.createElement("button");
randomColorBtn.classList.add("btn");
randomColorBtn.textContent = "Random Colors";
btnDiv.appendChild(randomColorBtn);

// board element creation
const board = document.createElement("div");
board.classList.add("board");

grid.appendChild(board);


// square creation and painting
function squareCreation(gridCount) {
    clearGrid();
    const size = gridCount * gridCount;
    const boardSize = 798;
    const squareSize = (boardSize / gridCount);
    for (let i = 0; i < size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        let opacity = 0;

        // paint the mouse trail
        square.addEventListener("mouseover", () => {
            if (randomSquare == true) {
                square.style.backgroundColor = `#${randomizeColor()}`;
            } else {
                square.style.backgroundColor = "black"
            };
            opacity += (10/100);
            square.style.opacity = String(opacity); 
        });
        board.appendChild(square);
    };
};

const userInput = () => {
    storeSize = parseInt(prompt("Select grid size (Maximum 100)")); 
    return storeSize;   
}

function clearGrid() {
    board.innerHTML = "";
}

function newGrid() {
    const size = userInput();
    if(size && size > 0 && size <= 100) {
        //clean the previous board and create a new one
        clearGrid();
        randomSquare = false;
        squareCreation(size);
    } else {
        alert("Please enter a number between 1 and 50");
    }
}

// creates the default board
squareCreation(16);
let storeSize = 16;
let randomSquare = false;


// extra credit: random color
function randomizeColor() {
    const randomHexNumber = Math.floor(Math.random() * 16777215); //entre 0 1 16777215 (ffffff em hexadecimal)
    let hexColor = randomHexNumber.toString(16);
    console.log(hexColor);
    return hexColor;
}

sizeBtn.addEventListener("click", newGrid);

randomColorBtn.addEventListener("click", () => {
    randomSquare = true;
    squareCreation(storeSize);
});