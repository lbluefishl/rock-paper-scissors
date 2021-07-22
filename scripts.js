

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


function askPlayer() {
    playerSelection = prompt("Rock, paper, or scissors?", "").toLowerCase().trim();

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        alert("check your spelling");
        askPlayer();
    } else {
        console.log(`You chose ${playerSelection}!`);
    }
}

function askComputer() {
    computerSelection = ['rock', 'paper', 'scissors']
    computerSelection = computerSelection[Math.floor(Math.random() * 3)];
    console.log(`Computer chose ${computerSelection}!`);
}

function gameRound() {

    if (playerSelection === computerSelection) {
        console.log(`Tie!`);
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win!`);
        playerScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose.');
        computerScore++;

    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You win!`);
        playerScore++;

    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose.');
        computerScore++;


    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You win!`);
        playerScore++;

    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose.');
        computerScore++;

    }
}

function game() {

    for (i=1; i< 6; i++) {
        console.log(`Round ${i}`);
        askPlayer();
        askComputer();
        gameRound();
        console.log(`The current score is You: ${playerScore} to Computer: ${computerScore}`);
    }
    if (playerScore === computerScore) {
        console.log(`Final score: Tie!`)
    }
    else if (playerScore > computerScore) {
        console.log(`Final Result: You Win!`);
    }
    else if (playerScore < computerScore) {
        console.log(`Final Result: You Lose!`);
    }
}


game();