const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl= document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock= document.getElementById ('playerRock');
const playerPaper= document.getElementById ('playerPaper');
const playerScissors= document.getElementById ('playerScissors');

const computerRock= document.getElementById ('computerRock');
const computerPaper= document.getElementById ('computerPaper');
const computerScissors= document.getElementById ('computerScissors');

const allGameIcons = document.querySelectorAll('.fas');
 
const choices = {
  rock: { name: 'Rock', defeats: ['scissors'] },
  paper: { name: 'Paper', defeats: ['rock'] },
  scissors: { name: 'Scissors', defeats: ['paper'] }
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

//Reset all 'selected' icons
function resetSelected(){ 
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

//  Reset Score & playerChoice/computerChoice
function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}

// Random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2){
    computerChoice = 'rock';
  }else if(computerChoiceNumber > 0.4){
    computerChoice = 'paper';
  }else{
    computerChoice = 'scissors';
  }
}

// Add  computerChoice
function displayComputerChoice() {
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' Scissors';      
      break;
    default:
      break;
  }
}

//  Check result, increase scores, update resultText 
function updateScore(playerChoice){
  if (playerChoice === computerChoice){
    resultText.textContent = "It's a tie.";
  } else{
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1){
      startConfetti();
      resultText.textContent = "You won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You lost!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

//  Call functions to process turn 
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons 
function select(playerChoice) {
  checkResult(playerChoice);
  // Add playerChoice
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' Scissors';
      break;
    default:
      break;
  }
}

//  On startup, set initial values
resetAll();