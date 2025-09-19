
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
function squareCreation(grid) {
    const size = grid * grid;
    const pixels = 500 / grid;
    for (let i = 0; i < size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${pixels}px`;
        square.style.height = `${pixels}px`;
        board.appendChild(square);
        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "lightblue";
        });
    }
    //console.log(`Square Size: ${pixels} px`);
}

squareCreation(16);

const userInput = () => {
    return parseInt(prompt("Select grid size (Maximum 50)"));   
}

function newGrid() {
    const size = userInput();
    if(size && size > 0 && size <= 50) {
        //limpa o board e carrega novos quadrados
        board.innerHTML = "";
        squareCreation(size);
    } else {
        alert("Please enter a number between 1 and 50");
    }
}

sizeBtn.addEventListener("click", newGrid);