function computerPlay() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i === 1) {
        return 'Rock';
    }
    else if (i === 2) {
        return 'Paper';
    }
    else (i === 3)
        return 'Scissors';
}

function gameResult(player, computer) {
    if (player === computer) {
        return 'It\'s a TIE! ' + player + ' bumps into ' + computer;
    }
    else if (player === 'rock' && computer === 'scissors' ||
            player === 'scissors' && computer === 'paper' ||
            player === 'paper' && computer === 'rock') {
        return 'Player wins! ' + player + ' beats ' + computer + '!';
    }
    else if (player === 'rock' && computer === 'paper' ||
            player === 'scissors' && computer === 'rock' ||
            player === 'paper' && computer === 'scissors') {
        return 'Computer wins! ' + computer + ' beats ' + player + '!';
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let tieGames = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('rock, paper, or scissors?');
        let computerSelection = computerPlay();
        let string = gameResult(playerSelection.toLowerCase(), computerSelection.toLowerCase())
        console.log(string);
        if (string.charAt(0) === 'I') {
            tieGames++;
        }
        else if (string.charAt(0) === 'P') {
            playerScore++;
        }
        else if (string.charAt(0) === 'C') {
            computerScore++;
        }
    }
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);
    console.log('Tie Games: ' + tieGames);
}

game();
