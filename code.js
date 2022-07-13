let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getComputerChoice(){
 const choices = ['r', 'p', 's'];
 const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
 return "Scissors";
}

function win(userchoice, computerchoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(userchoice)} beats ${convertToWord(computerchoice)} ,You win!`;
}

function lose(userchoice, computerchoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(userchoice)} loses to ${convertToWord(computerchoice)} ,You lost!`; 
}

function draw(userchoice, computerchoice) {
  
  result_p.innerHTML = `${convertToWord(userchoice)} equals ${convertToWord(computerchoice)} It's a draw!`; 
}



function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
 break;
   case "rp":
  case "ps":
  case "sr":
   lose(userChoice, computerChoice);

break;
   case "rr":
  case "pp":
  case "ss":
   draw(userChoice, computerChoice);
   break;
   
  }
}


function main() {
 rock_div.addEventListener('click', function() {
    game("r");
 })

 paper_div.addEventListener('click', function() {
    game("p");
 })

 scissors_div.addEventListener('click', function() {
   game("s");
 })
}
main();