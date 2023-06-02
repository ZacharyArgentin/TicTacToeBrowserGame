const statusDisplay = document.querySelector(".game-status");
let gameActive = true;
let currentPlayer = "x";
let gameState = ["", "", "", "", "", "", "", "", "", ]

// document.querySelector(".box").addEventListener("click", boxClicked);
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => addEventListener("click", boxClicked));

function boxClicked() {
    console.log("Click!");
}