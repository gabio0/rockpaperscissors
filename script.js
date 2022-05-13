const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.querySelector('.score');
let playerScore = 0;
let computerScore = 0;
let tieGames = 0;

function myFunction() {
    alert ("Hello World!");
  }

function computerPlay() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i === 1) {
        return 'rock';
    }
    else if (i === 2) {
        return 'paper';
    }
    else (i === 3)
        return 'scissors';
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        tieGames++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        }
    score.textContent = "Player Score: " + playerScore + "\r\nComputer Score: " + computerScore + "\r\nTie Games: " + tieGames;
    if(playerScore >= 5) {
        if(playerScore == computerScore) {
            score.textContent += "\r\nIt's a tie!"
        }
        else if (playerScore > computerScore) {
            score.textContent += "\r\nYou win!"
        }
        else if(computerScore > playerScore) {
            score.textContent += "\r\nYou lose!"
        }
    }
    }


rock.addEventListener("click", function(){playRound('rock');});
paper.addEventListener('click', function(){playRound('paper');});
scissors.addEventListener('click', function(){playRound('scissors');});

score.textContent = "Player Score: " + playerScore + "\r\nComputer Score: " + computerScore + "\r\nTie Games: " + tieGames;

