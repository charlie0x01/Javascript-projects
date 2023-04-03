// extract game element
const gameBoard = document.querySelector("#game-board");
const infoBoard = document.querySelector("#info");

// board squares
const boardSquares = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
infoBoard.textContent = "Circle will go first!";

// create board
function createBoard() {
  boardSquares.forEach((_cells, index) => {
    const cell = document.createElement("div"); // create element
    cell.classList.add("square"); // add styles
    cell.id = index; // add id of the cell
    // event lister for cell. when user click on cell
    cell.addEventListener("click", addGo);
    // now append these into game board
    gameBoard.append(cell);
  });
}

// call the function
createBoard();

// trigger when a cell clicked
function addGo(e) {
  console.log(e.target.id);
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);

  // change the turn
  go = go === "circle" ? "cross" : "circle";

  // remove eventlister
  e.target.removeEventListener("click", addGo);

  // change info display info
  infoBoard.textContent = "It is now " + go + "'s go!";

  // check score
  checkScores();
}

function checkScores() {
  const allSquares = document.querySelectorAll(".square");
  console.log(allSquares);
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  console.log(allSquares[4]);

  // check for winning combo for circle
  winningCombos.forEach((combo) => {
    const circleWin = combo.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    );

    if (circleWin) {
      infoBoard.textContent = "Circle Wins!!!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  // check for winning combo for cross
  winningCombos.forEach((combo) => {
    const crossWin = combo.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("cross")
    );

    if (crossWin) {
      infoBoard.textContent = "Cross Wins!!!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
}
