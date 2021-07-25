let computerSelection;
let playerScore = 0;
let computerScore = 0;
let totalRounds = 1;


const button = document.createElement('button')
button.textContent = 'Reset';
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scoreResult = document.querySelector('#score-result');
const finalScore = document.querySelector('#final-score');
const playerFinalScore = document.querySelector('#player-score');
const computerFinalScore = document.querySelector('#computer-score');
const roundNumber = document.querySelector('#round-number');
const body = document.querySelector('main');

var selections = document.querySelectorAll('.active');
selections.forEach(selection => selection.addEventListener('click', playRound));
button.addEventListener('click',reset);


function playRound() {
    if (totalRounds<6) {
    askComputer();
    playerSelection = this.id;
    if (playerSelection === computerSelection) {
        scoreResult.textContent=`Computer picked the same thing! Tie!`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        scoreResult.textContent=`Computer chose scissors. You win this round!`;
        playerScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        scoreResult.textContent=`Computer chose paper. You lose this round.`;
        computerScore++;

    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        scoreResult.textContent=`Computer chose rock. You win this round!`;
        playerScore++;

    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        scoreResult.textContent=`Computer chose scissors. You lose this round.`;
        computerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        scoreResult.textContent=`Computer chose paper. You win this round!`;
        playerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        scoreResult.textContent=`Computer chose rock. You lose this round.`;
        computerScore++;
    }
    ++totalRounds;
    playerFinalScore.textContent = `Player Score: ${playerScore}`;
    computerFinalScore.textContent = `Computer Score: ${computerScore}`;
    roundNumber.textContent = `Round ${totalRounds}`;
    check();
}
};

function askComputer() {
    computerSelection = ['rock', 'paper', 'scissors']
    computerSelection = computerSelection[Math.floor(Math.random() * 3)];
} 
function check() {
    if (totalRounds === 6) {
        if (playerScore === computerScore) {
            finalScore.textContent = `This game ended in a tie!`;
        }
        else if (playerScore > computerScore) {
            finalScore.textContent = `You won the game!`;
        } else {
            finalScore.textContent = `You lost the game.`;
        }

        roundNumber.textContent='';
        body.appendChild(button);
        selections.forEach(selection => selection.classList.remove('active'));
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    totalRounds = 1;
    playerFinalScore.textContent = `Player Score: ${playerScore}`;
    computerFinalScore.textContent = `Computer Score: ${computerScore}`;
    roundNumber.textContent = `Round ${totalRounds}`;
    scoreResult.textContent='';
    finalScore.textContent = '';
    button.remove();
    selections.forEach(selection => selection.classList.add('active'));

}