const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "scissors"
    }
    if (randomNumber === 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        return = "It's a Draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        return = "You win!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        return = "You lost!"
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        return = "You win!"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        return = "You lost!"
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        return = "You win!"
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        return = "You lose!"
    }

    resultDisplay.innerHTML = result
}