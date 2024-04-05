
 let playerSelection = prompt("Enter your choice");

function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const randomIndex =  Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function playRound(playerSelection,computerSelection){}