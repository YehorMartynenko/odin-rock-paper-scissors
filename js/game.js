let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "rock";
    } else if (choice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log("Your choice is " + humanChoice + ". Computer choice is " + computerChoice);

    switch(humanChoice) {
        case "rock":
            if (computerChoice === "paper"){
                getResultMessage(humanChoice, computerChoice, false);
                computerScore++;
                break;
            } else if (computerChoice === "scissors"){
                getResultMessage(humanChoice, computerChoice, true);
                humanScore++;
                break;
            } else {
                console.log("Tie!");
            }
        case "paper":
              if (computerChoice === "scissors"){
                getResultMessage(humanChoice, computerChoice, false);
                computerScore++;
                break;
            } else if (computerChoice === "rock"){
                getResultMessage(humanChoice, computerChoice, true);
                humanScore++;
                break;
            } else {
                console.log("Tie!");
            }
        case "scissors":
            if (computerChoice === "rock"){
                getResultMessage(humanChoice, computerChoice, false);
                computerScore++;
                break;
            } else if (computerChoice === "paper"){
                getResultMessage(humanChoice, computerChoice, true);
                humanScore++;
                break;
            } else {
                console.log("Tie!");
            }
        default:
            console.log("It looks like you provided an invalid option");
            break;
    }
}

function getResultMessage(humanChoice, computerChoice, isWin){
    if(isWin){
        console.log("You won! " + humanChoice +" beats " + computerChoice);
    }  else {
        console.log("You lost. " + computerChoice + " beats " + humanChoice);
    }
}

playRound(getHumanChoice(), getComputerChoice());