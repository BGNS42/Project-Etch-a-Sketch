
// grid element selection
const grid = document.querySelector("#grid");

// size button element creation
const sizeBtn = document.createElement("button");
sizeBtn.classList.add("btn");
sizeBtn.textContent = "Size";
grid.appendChild(sizeBtn);

// board element creation
const board = document.createElement("div");
board.classList.add("board");

grid.appendChild(board);


// square creation
function squareCreation(gridCount) {
    const size = gridCount * gridCount;
    const boardSize = 798;
    const squareSize = (boardSize / gridCount);
    for (let i = 0; i < size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        //square.style.fontSize = "8px"
        //square.textContent = `${i + 1}`;

        // paint the mouse trail
        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "lightblue";
        });
        board.appendChild(square);
    }
    //console.log(`Square Size: ${squareSize} px`);
}

squareCreation(16);

const userInput = () => {
    return parseInt(prompt("Select grid size (Maximum 100)"));   
}

function newGrid() {
    const size = userInput();
    if(size && size > 0 && size <= 100) {
        //clean the previous board and create a new one
        board.innerHTML = "";
        squareCreation(size);
    } else {
        alert("Please enter a number between 1 and 50");
    }
}

sizeBtn.addEventListener("click", newGrid);