
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const randomIndex =  Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


 
function getPlayerSelection(selection){
   let choice = selection.toLowerCase();
   return choice;
}

let resultBox = document.querySelector(".result");
let answer = document.createElement("p");

function playRound(playerSelection,computerSelection){
 if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
    answer.textContent = "Draw";
    resultBox.appendChild(answer);
    return 0;
 } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase()=== "paper")
 {
   answer.textContent = "You lost";
   resultBox.appendChild(answer);
    return 2;
 } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase()=== "rock")
 {
   answer.textContent = "You won";
   resultBox.appendChild(answer);
    return 1;
 } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase()=== "rock"){
   answer.textContent = "you lost";
   resultBox.appendChild(answer);
    return 2;
 }  else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase()=== "scissors"){
   answer.textContent = "you won";
   resultBox.appendChild(answer);
    return 1;
 } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase()=== "scissors"){
   answer.textContent = "you lost";
   resultBox.appendChild(answer);
    return 2;
 } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase()=== "paper"){
   answer.textContent = "you won";
   resultBox.appendChild(answer);
    return 1;
 } else {
    console.log( "unexpected token");
 }
}



   let playerScore = 0;
   let CompScore = 0;
   let result;
   let roundCount = 0;
document.body.addEventListener("click", (event) => {
  
   

   switch(event.target.textContent){
      case "Rock":result = playRound(getPlayerSelection("rock"),getComputerChoice());
      break;
      case "Paper":result = playRound(getPlayerSelection("paper"), getComputerChoice());
      break;
      case "Scissors":result = playRound(getPlayerSelection("scissors"), getComputerChoice());
      break;
      default:
      console.log("An error occured");
  }
      roundCount++;

       if(result === 1){
         playerScore++;
       } else if( result === 2){
         CompScore++;
       } else{
         playerScore++;
         CompScore++;
       }

       if(roundCount === 5){
           if(playerScore > CompScore){
            answer.textContent=`Congratulations, you are the 1 with: ${playerScore} to ${CompScore}`;
          } else if(playerScore < CompScore){
          answer.textContent = `you have lost with score:${playerScore} to ${CompScore}`;
          } else {
           answer.textContent = `Its a tie:${playerScore} to ${CompScore}`;
         }

         roundCount = 0;
         playerScore = 0;
         CompScore = 0;
       }
})




