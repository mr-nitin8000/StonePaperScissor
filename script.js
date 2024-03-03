let userScore = 0;
let compScore = 0;
const mg = document.querySelector(".msg");
const mg_cont = document.querySelector(".msg-container");
const choices = document.querySelectorAll(".choice");

const userScorePare = document.querySelector("#user-score");
const compScorePare = document.querySelector("#comp-score");

const drawGame = () => {
  console.log("Game was draw");
  mg.innerText = "Game was Draw Play Again!!";
  mg_cont.style.backgroundColor = "yellow";
  mg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("you win");
    userScore++;
    userScorePare.innerText = userScore;
    mg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
    mg_cont.style.backgroundColor = "green";
    mg.style.color = "white";
  } else {
    // console.log("You Lose");
    compScore++;
    compScorePare.innerText = compScore;
    mg.innerText = `You Lose!!  ${compChoice} beats your ${userChoice}`;
    mg_cont.style.backgroundColor = "red";
    mg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  // console.log("userChoice = ", userChoice);
  const compChoice = genCompChoice();
  // console.log("compChoice = ", compChoice);

  if (userChoice === compChoice) {
    // draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice === "paper") {
      if (compChoice === "scissors") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else {
      if (compChoice === "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return option[index];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice);
  });
});
