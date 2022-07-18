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
function computerPlay() {
    let compNumber = (Math.floor(Math.random() * 3));
    let compChoice = undefined;
    if (compNumber === 0) {
        return compChoice = "Rock";
        console.log("Computer Choice is Rock");
        
    } else if (compNumber === 1) {
      return compChoice = "Paper";
      console.log("Computer Choice is Paper");

    } else {
        return compChoice = "Scissors";
        console.log("Computer Choice is Scissors");

    }
    console.log(compChoice);F
}

//prompt player for their choice
//make it case insensitive
//ie: if RocK or rOCK
//return Rock
function playerSelection(choice) {
    let playerPrompt = prompt("Rock, Paper, or Scissors?");
    
    let playerChoice1 = playerPrompt[0].toUpperCase();
    
    let playerChoice2 = playerPrompt.substring(1);
    
    let playerChoice3 = playerChoice2.toLowerCase();
    let yourChoice = playerChoice1 + playerChoice3;
    console.log(`Player Choice is ${yourChoice}`);
    // let Choices = 'Rock' || 'Paper' || 'Scissors';
    // if((yourChoice != Choices)) {
    //     return "Must be 'Rock', 'Paper', or 'Scissors'!";
    // } else {
        return yourChoice;
}
// }
//This seems redundant
//         |
//         |
//         V
// let computerSelection = () => computerPlay();


//take player and computer choice
//compare what each function returns
//output winner and text: "You win! Rock beats scissors"

// const playerPick = playerSelection();
// const computerSelection = computerPlay();


// let yourChoice = playerSelection();
// let compChoice = computerPlay();
let roundWinner = undefined;
let roundOutlook = undefined;

function playRound(playerSelection, computerPlay) {
   
    yourChoice = playerSelection;
    compChoice = computerPlay;
    
    
    
    
    if (yourChoice == compChoice) {
        roundWinner = "It's a tie!"
        console.log(roundWinner);
    }else if (yourChoice == "Rock" && compChoice === "Paper"){
        roundWinner = "Computer";
        roundOutlook = "You lose. Paper beats rock.";
console.log(roundWinner);
    }else if (yourChoice == "Paper" && compChoice === "Scissors") {
        roundWinner = "Computer"
        roundOutlook = "You lose. Scissors beats paper";
        console.log(roundWinner);
    }else if (yourChoice == "Scissors" && compChoice === "Rock") {
        roundWinner = "Computer";
        roundOutlook = "You lose. Rock beats scissors";
console.log(roundWinner);
    }else if (yourChoice == "Rock" && compChoice === "Scissors") {
        roundWinner = "Player";
        roundOutlook = "You win! Rock beats scissors.";
    console.log(roundWinner);
    }else if (yourChoice == "Paper" && compChoice === "Rock") {
        roundWinner = "Player";
        roundOutlook = "You win! Paper beats rock";
    console.log(roundWinner);
    }else if (yourChoice == "Scissors" && compChoice === "Paper") {
        roundWinner = "Player";
        roundOutlook = "You win! Scissors beats paper."
    console.log(roundWinner);
    }else{
        return "error";
    }
    
   }

//play function round 5 times
   function game (round) {
       


       for (let i = 0; i < 5; i++) {
           
           if (roundWinner == "Player") {
               playerScore ++;
                console.log(roundOutlook); 
                 
           } else if (roundWinner == "Computer") {
               compScore++;
                console.log(roundOutlook);
                
           }else{
               playerScore++;
               compScore++;
                console.log(roundOutlook); 
                
           }
       }
       
       if (playerScore > compScore) {
           return `You scored ${playerScore} and the computer scored ${compScore}. You win!`;
       }else if (compScore > playerScore) {
           return `You scored ${playerScore} and the computer scored ${compScore}. You lose`;
       }else{
           return "You tied";
       }
   }

//    const computerSelection = computerPlay();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//new js // dom stuff

const playerScore = document.querySelector(".playerScore");
const rock = document.querySelector('rock');
const paper = document.querySelector('paper');
const scissors = document.querySelector('scissors');

rock.addEventListener('click', function() {
    playRound("Rock", computerPlay());
})

paper.addEventListener('click', function() {
    playRound("Paper", computerPlay());
})

scissors.addEventListener('click', function() {
    playRound("Scissors", computerPlay());
})
// rock.addEventListener('click', playRound('Rock', computerPlay()));
// paper.addEventListener('click', playRound('Paper', computerPlay()));
// scissors.addEventListener('click', playRound('Scissors', computerPlay()));






