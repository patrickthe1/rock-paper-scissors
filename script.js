
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const randomIndex =  Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


 
function getPlayerSelection(){
   let choice = prompt("Make your choice").toLowerCase();
   return choice;
}


function playRound(playerSelection,computerSelection){
 if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
    console.log( "Draw")
    return 0;
 } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase()=== "paper")
 {
    console.log( "You lost")
    return 2;
 } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase()=== "rock")
 {
    console.log( "You won")
    return 1;
 } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase()=== "rock"){
    console.log( "You lost!")
    return 2;
 }  else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase()=== "scissors"){
    console.log( "You won!")
    return 1;
 } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase()=== "scissors"){
    console.log( "You lost!")
    return 2;
 } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase()=== "paper"){
    console.log( "You won!")
    return 1;
 } else {
    console.log( "unexpected token");
 }
}


function playGame(){
let playerScore = 0;
let CompScore = 0;

for(i=1; i <= 5; i++){
    let compChoice = getComputerChoice();
    let playerChoice = getPlayerSelection();
    let result = playRound(playerChoice,compChoice);
    
    if(result === 1){
      playerScore++;
    } else if( result === 2){
      CompScore++;
    } else{
      playerScore++;
      CompScore++;
    }
}

if(playerScore > CompScore){
   console.log(`Congratulations, you are the 1 with: ${playerScore} to ${CompScore}`);
} else if(playerScore < CompScore){
   console.log(`you have lost you fuck with score:${playerScore} to ${CompScore}`);
} else {
   console.log(`Its a tie:${playerScore} to ${CompScore}`)
}
}

console.log("Hello World");
playGame();