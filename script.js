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
        return compChoice = "Rock";
    } else if (compNumber === 1) {
      return compChoice = "Paper";
    } else {
        return compChoice = "Scissors";
    }
}

//prompt player for their choice
//make it case insensitive
//ie: if RocK or rOCK
//return Rock
function playerSelection(choice) {
    let playerPrompt = prompt("Rock, Paper, or Scissors?");
    console.log(playerPrompt);
    let playerChoice1 = playerPrompt[0].toUpperCase();
    console.log(playerChoice1);
    let playerChoice2 = playerPrompt.substring(1);
    console.log(playerChoice2);
    let playerChoice3 = playerChoice2.toLowerCase();
    console.log(playerChoice3);
    let yourChoice = playerChoice1 + playerChoice3;
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

function playRound(playerPick, computerSelection) {
    var roundWinner = undefined;
    let yourChoice = playerSelection();
    let compChoice = computerPlay();

    // playerSelection();
    
    // computerPlay();
    
    console.log(computerPlay());
    
    if (yourChoice == compChoice) {
        return roundWinner = "It's a tie!"
    }else if (yourChoice == "Rock" && compChoice === "Paper"){
        return roundWinner = "You lose. Paper beats rock.";
    }else if (yourChoice == "Rock" && compChoice === "Scissors") {
        return roundWinner = "You win! Rock beats scissors.";
    }else if (yourChoice == "Paper" && compChoice === "Rock") {
        return roundWinner = "You win! Paper beats rock";
    }else if (yourChoice == "Paper" && compChoice === "Scissors") {
        return roundWinner = "You lose. Scissors beats paper";
    }else if (yourChoice == "Scissors" && compChoice === "Rock") {
        return roundWinner = "You lose. Rock beats scissors";
    }else if (yourChoice == "Scissors" && compChoice === "Paper") {
        return roundWinner = "You win! Scissors beats paper."
    }else{
        return "error";
    }
    
   }

//    const computerSelection = computerPlay();







