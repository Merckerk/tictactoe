let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board = document.getElementById("board");
const status = document.getElementById("status");

function makeMove(cellIndex) {
  if (gameActive && gameBoard[cellIndex] === "") {
    gameBoard[cellIndex] = currentPlayer;
    board.children[cellIndex].textContent = currentPlayer;
    if (checkWin()) {
      status.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (gameBoard.every((cell) => cell !== "")) {
      status.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
  if (!gameActive) {
    saveGameResult(status.textContent, gameBoard);
  }
}

function checkWin() {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  board.querySelectorAll(".cell").forEach((cell) => (cell.textContent = ""));
  status.textContent = "Player X's turn";
}

resetBoard();

function saveGameResult(Winner, Board) {
  const BoardJSON = JSON.stringify(Board);
  fetch("save_result.php", {
    //change this
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `winner=${Winner}&board=${BoardJSON}`,
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error("Error:", error));
}
