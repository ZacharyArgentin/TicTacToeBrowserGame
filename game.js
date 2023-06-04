const statusDisplay = document.querySelector(".game-status");
let gameActive = true;
let gameWon = false;
let currentPlayer = "X";
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
    checkVictory(gameState);
    if (gameActive) {switchPlayer();}
}

function updateGame(boxClicked, boxIndex) {
    gameState[boxIndex] = currentPlayer;
    boxClicked.innerHTML = currentPlayer;
}

function checkVictory(gameState) {
    // Check all 8 possible "3 in a row" combinations
    // Check horizontal "3 in a rows"
    if      ( (gameState[0] == gameState[1] && gameState[1] == gameState[2]) && (gameState[0] != "") ) {gameWon = true;}
    else if ( (gameState[3] == gameState[4] && gameState[4] == gameState[5]) && (gameState[3] != "") ) {gameWon = true;}
    else if ( (gameState[6] == gameState[7] && gameState[7] == gameState[8]) && (gameState[6] != "") ) {gameWon = true;}
    // Check vertical "3 in a rows"
    else if ( (gameState[0] == gameState[3] && gameState[3] == gameState[6]) && (gameState[0] != "") ) {gameWon = true;}
    else if ( (gameState[1] == gameState[4] && gameState[4] == gameState[7]) && (gameState[1] != "") ) {gameWon = true;}
    else if ( (gameState[2] == gameState[5] && gameState[5] == gameState[8]) && (gameState[2] != "") ) {gameWon = true;}
    // Check diagonal "3 in a rows"
    else if ( (gameState[0] == gameState[4] && gameState[4] == gameState[8]) && (gameState[0] != "") ) {gameWon = true;}
    else if ( (gameState[2] == gameState[4] && gameState[4] == gameState[6]) && (gameState[2] != "") ) {gameWon = true;}

    // Check for a stalemate
    let isStalemate = true;
    for (i = 0; i < gameState.length; i++) {
        if (gameState[i] === "") {
            isStalemate = false;
        }
    }

    // Activate end of game sequence
    if (gameWon) {
        gameActive = false;
        statusDisplay.innerHTML = `Player ${currentPlayer} Wins!`
    } else if (isStalemate) {
        gameActive = false;
        statusDisplay.innerHTML = `Tie Game!`
    } else {
        return;
    }
}

function switchPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`
}