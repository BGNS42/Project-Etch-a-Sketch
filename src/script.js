
const grid = document.querySelector("#grid");

for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "lightblue";
    });
}


