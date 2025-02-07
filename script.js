const container = document.querySelector(".container");
const resetButton = document.getElementById("reset");
let gridSize = 16; // Default grid size

// Function to create grid
function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    let squareSize = 960 / size; // Calculate square size to fit 960px

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Hover effect with random color and darkening
        square.addEventListener("mouseenter", () => {
            if (!square.style.backgroundColor) {
                square.style.backgroundColor = randomColor();
                square.dataset.opacity = 0.1;
            } else {
                let currentOpacity = parseFloat(square.dataset.opacity);
                if (currentOpacity < 1) {
                    square.dataset.opacity = currentOpacity + 0.1;
                    square.style.opacity = square.dataset.opacity;
                }
            }
        });

        container.appendChild(square);
    }
}

// Function to generate random RGB color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Reset grid with user input
resetButton.addEventListener("click", () => {
    let userSize = parseInt(prompt("Enter new grid size (max 100):"));
    if (userSize > 0 && userSize <= 100) {
        createGrid(userSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// Initialize default grid
createGrid(gridSize);
