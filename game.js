const statusDisplay = document.querySelector(".game-status");
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", "", ]

// Add event listeners
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => addEventListener("click", makeMove));
document.querySelector(".game-restart").addEventListener("click", restartGame);

console.log("Game Start");
statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`

// Why does this function run when clicking literally anywhere? Rather than only when clicking a box?
function makeMove(clickEvent) {
    console.log("Running makeMove function");
    const boxClicked = clickEvent.target;  // clickEvent.target returns the HTML element that was clicked
    const boxIndex = parseInt(boxClicked.dataset.index);  // .dataset retrieves an HTML attribute prefixed with "data-". In this case, we retrieve the "data-index" attribute.
    
    if (gameState[boxIndex] !== "" || !gameActive) {
        return;
    } else {
        console.log(`${currentPlayer} played a move in box ${boxIndex}`);
    }

    updateGame(boxClicked, boxIndex);
    checkVictory(gameState);
    console.log(`Is the game still active? ${gameActive}`);
    if (gameActive) {
        switchPlayer();
        console.log(`Player ${currentPlayer}'s turn:`);
    }
}

function updateGame(boxClicked, boxIndex) {
    console.log("Running updateGame function");
    gameState[boxIndex] = currentPlayer;
    boxClicked.innerHTML = currentPlayer;
}

function checkVictory(gameState) {
    console.log("Running checkVictory function");
    let gameWon = false;
    let isStalemate = false;
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
    if (!gameWon) {isStalemate = !gameState.includes("");}
    

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
    console.log("Running switchPlayer function");
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`
}

function restartGame() {
    console.log("Restarting game...")
    gameState = ["", "", "", "", "", "", "", "", "", ];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll(".box").forEach(box => box.innerHTML = "");
    statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
}