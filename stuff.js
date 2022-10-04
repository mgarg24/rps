function get() {

    const array = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
}



function playgame(playerSelection, computerSelection){

    console.log(computerSelection);
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === "paper" & computerSelection === "paper") || 
    (playerSelection === "rock" & computerSelection === "rock") || 
    (playerSelection === "scissors" & computerSelection === "scissors") ){

        console.log("tie");
    }
    
    else if ((playerSelection === "paper" & computerSelection === "rock") || 
    (playerSelection === "rock" & computerSelection === "scissors") || 
    (playerSelection === "scissors" & computerSelection === "paper") ) {
        console.log("you win");

        return true;
    }
    else{
        console.log("you lose");

        return false;
    }
}   
let playerpoint=0;
        let cpoint = 0;

        
function game (pchoice) {
    
    let result = playgame (pchoice, get());
        
        

    if (result === true){
        
        playerpoint++;
        document.querySelector(".Scorep").innerHTML= playerpoint;
       
        console.log(playerpoint);

    }
    else if (result ===false){
        cpoint++;
        document.querySelector(".Scoreui").innerHTML= cpoint;

        console.log(cpoint);
    }

    
    if (playerpoint === 5){

        document.querySelector("span").innerHTML= "YOU WON!!";
        playerpoint = 0;
        cpoint = 0;
    }
    else if (cpoint ===5){

        document.querySelector("span").innerHTML= "YOU LOST LOSER!!";
        playerpoint = 0;
        cpoint = 0;
    }

}

const rock = document.querySelector(".rock");

rock.addEventListener("click", () => {
    
    document.querySelector("span").innerHTML="";
    game("rock");});

const paper = document.querySelector(".paper");

paper.addEventListener("click", () => {
    
    document.querySelector("span").innerHTML="";
    game("paper");});

const scissors = document.querySelector(".scissors");

scissors.addEventListener("click", () => {
    
    document.querySelector("span").innerHTML="";
    game("scissors");});