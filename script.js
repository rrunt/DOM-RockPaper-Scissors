let wins = 0;
let ties = 0;
let losses = 0;


function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateStats(result) {
    if (result === 'win') {
        wins++;
        document.getElementById('wins').textContent = wins;
    } else if (result === 'tie') {
        ties++;
        document.getElementById('ties').textContent = ties;
    } else {
        losses++;
        document.getElementById('losses').textContent = losses;
    }
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        updateStats('tie');
        return "It's a tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        updateStats('win');
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        updateStats('lose');
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const result = playRound(playerSelection);
        console.log(result);
    });
});
