let playerOneScore = document.querySelector(".players .one span").textContent;
let playerTwoScore = document.querySelector(".players .two span").textContent;

let cells = document.querySelectorAll(".container div");
let arrayOfCells = Array.from(cells);
let player = 1;

function startGameAgain() {
  arrayOfCells.map((el) => {
    el.textContent = "";
    el.classList.remove("playerOne");
    el.classList.remove("playerTwo");
  });
}

function checkWinner() {
  if (
    (arrayOfCells[0].textContent == "o" &&
      arrayOfCells[1].textContent == "o" &&
      arrayOfCells[2].textContent == "o") ||
    (arrayOfCells[3].textContent == "o" &&
      arrayOfCells[4].textContent == "o" &&
      arrayOfCells[5].textContent == "o") ||
    (arrayOfCells[6].textContent == "o" &&
      arrayOfCells[7].textContent == "o" &&
      arrayOfCells[8].textContent == "o") ||
    (arrayOfCells[0].textContent == "o" &&
      arrayOfCells[4].textContent == "o" &&
      arrayOfCells[8].textContent == "o") ||
    (arrayOfCells[2].textContent == "o" &&
      arrayOfCells[4].textContent == "o" &&
      arrayOfCells[6].textContent == "o") ||
    (arrayOfCells[0].textContent == "o" &&
      arrayOfCells[3].textContent == "o" &&
      arrayOfCells[6].textContent == "o") ||
    (arrayOfCells[1].textContent == "o" &&
      arrayOfCells[4].textContent == "o" &&
      arrayOfCells[7].textContent == "o") ||
    (arrayOfCells[2].textContent == "o" &&
      arrayOfCells[5].textContent == "o" &&
      arrayOfCells[8].textContent == "o")
  ) {
    console.log("player one is win");
    playerOneScore = +playerOneScore + 1;
    document.querySelector(".players .one span").textContent = playerOneScore;

    startGameAgain();
    player = 1;
  } else if (
    (arrayOfCells[0].textContent == "x" &&
      arrayOfCells[1].textContent == "x" &&
      arrayOfCells[2].textContent == "x") ||
    (arrayOfCells[3].textContent == "x" &&
      arrayOfCells[4].textContent == "x" &&
      arrayOfCells[5].textContent == "x") ||
    (arrayOfCells[6].textContent == "x" &&
      arrayOfCells[7].textContent == "x" &&
      arrayOfCells[8].textContent == "x") ||
    (arrayOfCells[0].textContent == "x" &&
      arrayOfCells[4].textContent == "x" &&
      arrayOfCells[8].textContent == "x") ||
    (arrayOfCells[2].textContent == "x" &&
      arrayOfCells[4].textContent == "x" &&
      arrayOfCells[6].textContent == "x") ||
    (arrayOfCells[0].textContent == "x" &&
      arrayOfCells[3].textContent == "x" &&
      arrayOfCells[6].textContent == "x") ||
    (arrayOfCells[1].textContent == "x" &&
      arrayOfCells[4].textContent == "x" &&
      arrayOfCells[7].textContent == "x") ||
    (arrayOfCells[2].textContent == "x" &&
      arrayOfCells[5].textContent == "x" &&
      arrayOfCells[8].textContent == "x")
  ) {
    console.log("player two is win");
    playerTwoScore = +playerTwoScore + 1;
    document.querySelector(".players .two span").textContent = playerTwoScore;
    startGameAgain();
    player = 1;
  } else if (
    arrayOfCells[0].textContent !== "" &&
    arrayOfCells[1].textContent !== "" &&
    arrayOfCells[2].textContent !== "" &&
    arrayOfCells[3].textContent !== "" &&
    arrayOfCells[4].textContent !== "" &&
    arrayOfCells[5].textContent !== "" &&
    arrayOfCells[6].textContent !== "" &&
    arrayOfCells[7].textContent !== "" &&
    arrayOfCells[8].textContent !== ""
  ) {
    startGameAgain();
    player = 1;
  }
}

arrayOfCells.map((el) => {
  el.onclick = () => {
    if (player == 1 && el.textContent == "") {
      el.textContent = "o";
      el.classList.add("playerOne");
      console.log(player);
      player = 2;
    } else if (player == 2 && el.textContent == "") {
      el.textContent = "x";
      el.classList.add("playerTwo");
      console.log(player);

      player = 1;
    }

    checkWinner();
  };
});
