const resultMap = {
    'rock': {
        'paper': false,
        'scissors': true,
    },
    'paper': {
        'rock': true,
        'scissors': false,
    },
    'scissors': {
        'rock': false,
        'paper': true
    }
};

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'scissors';
        case 3:
            return 'paper';
    };
}

const getResult = (choiceUser, choiceComputer) => {
    if (choiceUser === choiceComputer) {
        return "It's a draw!";
    }
    const userWins = (resultMap[choiceUser][choiceComputer]);
    return userWins ? 'You win!' : 'You lose!';
}

const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    const computerChoice = generateComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice;
    resultDisplay.innerHTML = getResult(userChoice, computerChoice);
}))