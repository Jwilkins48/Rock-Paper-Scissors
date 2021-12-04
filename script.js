// Variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerChoice = ['rock', 'paper', 'scissors'];
let result = document.getElementById('result');
// Constants
const playerScoreOutput = document.getElementById('playerScore');
const computerScoreOutput = document.getElementById('computerScore');
const buttons = document.querySelectorAll('div.btn-container button');
const reset = document.querySelector('#restartBtn');

// Function plays round to compare player scores
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' &&
        computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins();
        result.innerHTML = `${playerSelection} beats ${computerSelection}. You Win!`

        if (playerScore == 5) {
            result.innerHTML = `Congrats you won! Press restart to play again`;
            disableButton();
        };
    } else if (playerSelection == computerSelection) {
        result.innerHTML = `You both chose ${computerSelection}. It's a tie!`
    } else {
        computerWins();
        result.innerHTML = `${computerSelection} beats ${playerSelection}. You Lost!`

        if (computerScore == 5) {
            result.innerHTML = 'You lose! Click restart to try again';
            disableButton();
        }
    };
}
// Displays when player wins game
function playerWins() {
    playerScore += 1
    playerScoreOutput.innerHTML = playerScore;
}

// Displays when computer wins game
function computerWins() {
    computerScore += 1
    computerScoreOutput.innerHTML = computerScore;
}

// Receiving computer selection
function computerPlay() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// disable buttons after game over
function disableButton() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
};

// get user selection from buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value);
    });
});
// reload page to restart
reset.addEventListener('click', () => location.reload());