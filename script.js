
 

function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const randomIndex =  Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}






function playRound(playerSelection,computerSelection){
 if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
    return "It is a tie";
 } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase()=== "paper")
 {
    return "You lost";
 } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase()=== "rock")
 {
    return "You won";
 } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase()=== "rock"){
    return "You lost!";
 }  else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase()=== "scissors"){
    return "You won!";
 } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase()=== "scissors"){
    return "You lost!";
 } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase()=== "paper"){
    return "You won!";
 } else {
    return "unexpected token";
 }
}
