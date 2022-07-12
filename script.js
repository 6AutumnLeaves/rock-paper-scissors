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
function computerPlay(random) {
    let compNumber = (Math.floor(Math.random() * 3));
    let compChoice = undefined;
    if (compNumber === 0) {
        console.log("Computer Choice is Rock");
        return compChoice = "Rock";
        
    } else if (compNumber === 1) {
        console.log("Computer Choice is Paper");
      return compChoice = "Paper";

    } else {
        console.log("Computer Choice is Scissors");
        return compChoice = "Scissors";

    }
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

function playRound(playerPick, computerSelection) {
    // var roundWinner = undefined;
    // var roundOutlook = undefined;
    let yourChoice = playerSelection();
    let compChoice = computerPlay();
    // playerSelection();
    
    // computerPlay();compScore++;
    
    
    
    if (yourChoice == compChoice) {
        roundWinner = "It's a tie!"
    }else if (yourChoice == "Rock" && compChoice === "Paper"){
        roundWinner = "Computer";
        roundOutlook = "You lose. Paper beats rock.";

    }else if (yourChoice == "Paper" && compChoice === "Scissors") {
        roundWinner = "Computer";
        roundOutlook = "You lose. Scissors beats paper";

    }else if (yourChoice == "Scissors" && compChoice === "Rock") {
        roundWinner = "Computer";
        roundOutlook = "You lose. Rock beats scissors";

    }else if (yourChoice == "Rock" && compChoice === "Scissors") {
        roundWinner = "Player";
        roundOutlook = "You win! Rock beats scissors.";
        
    }else if (yourChoice == "Paper" && compChoice === "Rock") {
        roundWinner = "Player";
        roundOutlook = "You win! Paper beats rock";
        
    }else if (yourChoice == "Scissors" && compChoice === "Paper") {
        roundWinner = "Player";
        roundOutlook = "You win! Scissors beats paper."
        
    }else{
        return "error";
    }
    
   }

//play function round 5 times
   function game (round) {
       let compScore = 0;
       let playerScore = 0;


       for (let i = 0; i < 5; i++) {
           playRound();
           
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







