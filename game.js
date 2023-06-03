const statusDisplay = document.querySelector(".game-status");
let gameActive = true;
let currentPlayer = "x";
let gameState = ["", "", "", "", "", "", "", "", "", ]

// document.querySelector(".box").addEventListener("click", boxClicked);
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => addEventListener("click", makeMove));

function makeMove(clickEvent) {
    const boxClicked = clickEvent.target;  // clickEvent.target returns the HTML element that was clicked
    const boxIndex = parseInt(boxClicked.dataset.index);  // .dataset retrieves an HTML attribute prefixed with "data-". In this case, we retrieve the "data-index" attribute.
    console.log(boxIndex);

    if (gameState[boxIndex] !== "" || !gameActive) {
        return;
    }

    updateGame(boxClicked, boxIndex);
    checkVictory();
}

function updateGame(boxClicked, boxIndex) {
    gameState[boxIndex] = currentPlayer;
    boxClicked.innerHTML = currentPlayer;
    console.log(gameState);
}

function checkVictory() {
    return;
}