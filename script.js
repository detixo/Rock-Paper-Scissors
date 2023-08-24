function getComputerChoice(){
    const options = ["rock","paper","scissors"];
    let choice = Math.floor(Math.random()*3)
    return options[choice];
}
function playRound() {
    let playerSelection=prompt("Enter your choice!").toLowerCase();
    let computerSelection = getComputerChoice();
    let msg;
    if(playerSelection==computerSelection){
        alert(`Draw!`);
        return playRound();
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        msg=`You Won! Rock beats scissors`;
        console.log(msg);
        return [1,msg];
    }else if(playerSelection=="paper" && computerSelection=="rock"){
        msg=`You Won! Paper beats Rock`;
        console.log(msg);
        return [1,msg];
    }else if(playerSelection=="scissors" && computerSelection=="paper"){
        msg=`You Won! scissors beats Paper`;
        console.log(msg);
        return [1,msg];
    }else if(playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors"){
        alert(`Wrong input! Try again`);
        return playRound();
    }else{
        msg=`You Lost ${computerSelection} beats ${playerSelection}`;
        console.log(msg);
        return [0,msg];
    }
  }
function game(){
    let results=[];
    let score=0;
    let history=[];
    for(let i=0;i<5;i++){
        results.push(playRound());
        if(results[0]=="cancel"){
            break;
        }
        score+=results[0][0];
        history.push(results[0][1]);
        results.pop();
    }
    console.log(`Game ended! You\`ve scored ${score}/5`)
    console.table(history)
}
   
  game();