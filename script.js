//Write a function that randomly selects rock, paper, or scissors

//No input from user
//Pick number 1-3
//1 = rock; 2 = paper; 3 = scissors
//return value


// let computerPlay = () => console.log(Math.floor(Math.random() * 3));
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

//this works, but not as I expected
//values are from 0-2 not 1-3
// this will still work though
//so far compPlay return 0-2
//I need if statements for this to return "Rock", "Paper", or "Scissors"


