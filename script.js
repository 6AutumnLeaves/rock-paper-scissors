//Write a function that randomly selects rock, paper, or scissors

//No input from user
//Pick number 1-3
//1 = rock; 2 = paper; 3 = scissors
//return value


// let computerPlay = () => console.log(Math.floor(Math.random() * 3));
//this works, but not as I expected
//values are from 0-2 not 1-3
// this will still work though
//so far compPlay return 0-2
//I need if statements for this to return "Rock", "Paper", or "Scissors"
let playerScore = 0;
let computerScore = 0;

const playAgain = () => {
    window.location.reload(true);
}
function computerPlay() {
    let compNumber = (Math.floor(Math.random() * 3));
    let compChoice = undefined;
    if (compNumber === 0) {
        return compChoice = "Rock";

    }else if (compNumber === 1) {
        return compChoice = "Paper";

    }else{
        return compChoice = "Scissors";

    }
}





//take player and computer choice
//compare what each function returns
//output winner and text: "You win! Rock beats scissors"

let roundWinner = undefined;
let roundOutlook = undefined;
function updateScore() {
    printWinner();
    thePlayerScore.textContent = `Player Score: ${playerScore}`;
    theComputerScore.textContent = `Computer Score: ${computerScore}`;
}

const printWinner = () => {
theVictor.textContent = roundOutlook;
}
function stopGame() {
 rock.removeEventListener('click',playRock);
 paper.removeEventListener('click', playPaper);
 scissors.removeEventListener('click', playScissors);
}

const removeHighlight = () => {
    theComputerScore.classList.remove('roundWinner');
    thePlayerScore.classList.remove('roundWinner');
}

const highlightWinner = () => {
    removeHighlight()
    if(roundWinner === "Player") {
        thePlayerScore.classList.add('roundWinner');
    }else{
        theComputerScore.classList.add('roundWinner');
    }
}
function checkGameWinner() {
    updateScore();
    highlightWinner();
    if(computerScore === 5 || playerScore === 5) {
        stopGame();
        if (roundWinner === "Player") {
            theVictor.textContent = "You win the game!";
        }else{
            theVictor.textContent = "You lost... Better Luck next time.";
        }
    }

}
function playRound(playerSelection, computerPlay) {
   
    yourChoice = playerSelection;
    compChoice = computerPlay;
    
    
    
    if (yourChoice == compChoice) {
        roundOutlook = "It's a tie!";
        checkGameWinner();

    }else if (yourChoice == "Rock" && compChoice === "Paper"){
        roundWinner = "Computer";
        roundOutlook = "You lose. Paper beats rock.";
        computerScore++;
        checkGameWinner();

    }else if (yourChoice == "Paper" && compChoice === "Scissors") {
        roundWinner = "Computer"
        roundOutlook = "You lose. Scissors beats paper";
        computerScore++;
        checkGameWinner();

    }else if (yourChoice == "Scissors" && compChoice === "Rock") {
        roundWinner = "Computer";
        roundOutlook = "You lose. Rock beats scissors";
        computerScore++;
        checkGameWinner();

    }else if (yourChoice == "Rock" && compChoice === "Scissors") {
        roundWinner = "Player";
        roundOutlook = "You win! Rock beats scissors.";
        playerScore++;
        checkGameWinner();

    }else if (yourChoice == "Paper" && compChoice === "Rock") {
        roundWinner = "Player";
        roundOutlook = "You win! Paper beats rock";
        playerScore++;
        checkGameWinner();

    }else if (yourChoice == "Scissors" && compChoice === "Paper") {
        roundWinner = "Player";
        roundOutlook = "You win! Scissors beats paper."
        playerScore++;
        checkGameWinner();

    }else{
        return "error";
    }
    
   }


//new js // dom stuff

const thePlayerScore = document.querySelector(".playerScore");
const theComputerScore = document.querySelector(".compScore");

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const theVictor = document.querySelector('.roundOutlook');

const playRock = () => {
    playRound("Rock", computerPlay());
}

const playPaper = () => {
    playRound("Paper", computerPlay());
}

const playScissors = () => {
    playRound("Scissors", computerPlay());
}

rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);
