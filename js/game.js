let humanScore = 0;
let computerScore = 0;
const options = document.querySelectorAll("button");

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
    if(computerScore < 5 && humanScore < 5){
        humanChoice = humanChoice.toLowerCase();

        const info = document.querySelector(".roundInfo");
        info.textContent = "Your choice is " + humanChoice + ". Computer choice is " + computerChoice;

        let result = 0;
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "paper"){
                    result = -1;
                    computerScore++;
                    break;
                } else if (computerChoice === "scissors"){
                    result = 1;
                    humanScore++;
                    break;
                } else {
                    result = 0;
                    break;
                }
            case "paper":
                if (computerChoice === "scissors"){
                    result = -1;
                    computerScore++;
                    break;
                } else if (computerChoice === "rock"){
                    result = 1;
                    humanScore++;
                    break;
                } else {
                    result = 0;
                    break;
                }
            case "scissors":
                if (computerChoice === "rock"){
                    result = -1;
                    computerScore++;
                    break;
                } else if (computerChoice === "paper"){
                    result = 1;
                    humanScore++;
                    break;
                } else {
                    result = 0;
                    break;
                }
            default:
                console.log("It looks like you provided an invalid option");
                break;
        }

        getResultMessage(humanChoice, computerChoice, result);

        const score = document.querySelector(".score");
        score.textContent = "Your score: " + humanScore + ". Computer score: "+computerScore
    } else {
        console.log("End");
        options.forEach(option => {
            option.style.backgroundColor = "#cccccc";
            option.style.border = "1px solid #999999";
        })
        const matchResult = document.querySelector(".matchResult");
        humanScore === 5 
        ? matchResult.textContent = "You reached 5 points and won this game" 
        : matchResult.textContent = "Your opponent reached 5 points and won this game";
    }
}

function getResultMessage(humanChoice, computerChoice, roundResult){
    const result = document.querySelector(".roundResult");
    if(roundResult === 1){
        result.textContent = "You won this round! " + humanChoice +" beats " + computerChoice;
    }  else if (roundResult === -1) {
        result.textContent = "You lost this round. " + computerChoice + " beats " + humanChoice;
    } else {
        result.textContent = "Tie";
    }
}


options.forEach(option => {
    option.addEventListener("click", function (e) {
        playRound(this.textContent, getComputerChoice());
    })
})
