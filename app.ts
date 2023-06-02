enum Choice {
    Rock = 'Rock',
    Paper = 'Paper',
    Scissors = 'Scissors'
}

enum Result {
    Win,
    Loss,
    Draw
}


const ChoiceResultMap = {
    [Choice.Rock]: {
        [Choice.Scissors]: Result.Win,
        [Choice.Paper]: Result.Loss,
    },
    [Choice.Paper]: {
        [Choice.Rock]: Result.Win,
        [Choice.Scissors]: Result.Loss,
    },
    [Choice.Scissors]: {
        [Choice.Paper]: Result.Win,
        [Choice.Rock]: Result.Loss,
    }
}

/**
 * Returns the members that an enum has
 * @param e An Enum
 * @returns Count of individual choices in enum
 */
const getMembersOfEnum = (e): number => {
    return Object.keys(e).length;
}

// All caps as we want to show this is a proper constant
const CHOICE_LENGTH: number = getMembersOfEnum(Choice);


/**
 * Return a Choice that corresponds to a given input text
 * @param choice String that represents a Choic e
 * @returns The corresponding Choice
 */
const getChoiceFromString = (choice: string): Choice => {
    switch (choice.toLowerCase()) {
        case 'rock':
            return Choice.Rock;
        case 'paper':
            return Choice.Paper;
        case 'scissors':
            return Choice.Scissors;
        default:
            throw new Error(`Input "${choice}" doesn't correspond to a valid choice!`);
    }
}

/**
 * Generates a random Choice
 * @returns a random Choice
 */
const getRandomChoice = (): Choice => {
    const randomNumber = Math.floor(Math.random() * CHOICE_LENGTH) + 1;

    switch (randomNumber) {
        case 1:
            return Choice.Rock;
        case 2:
            return Choice.Paper;
        case 3:
            return Choice.Scissors;
    };
}

/**
 * Returns the outcome of the given choices
 * @param primary the choice of the player we want to know the outcome of
 * @param secondary the choice of the opposing player
 * @returns Result from the perspective of the primary choice
 */

const getResultFromChoices = (primary: Choice, secondary: Choice): Result => {
    if (primary === secondary) {
        return Result.Draw;
    }
    return ChoiceResultMap[primary][secondary];
}

const computerElement = document.getElementById("computer-choice")
const userElement = document.getElementById("user-choice")
const resultElement = document.getElementById("result")
const buttonElements = document.querySelectorAll("button")

const handleClick = (e: Event) => {
    const choiceAsString = (e.target as HTMLElement).id;
    const userChoice = getChoiceFromString(choiceAsString);
    const computerChoice = getRandomChoice();
    const outcome: Result = getResultFromChoices(userChoice, computerChoice);

    updateElementWithChoice(computerElement, computerChoice);
    updateElementWithChoice(userElement, userChoice);
    updateElementWithResult(resultElement, outcome);
}


// Update an HTMLElement's innerText based on a choice
const updateElementWithChoice = (element: HTMLElement, choice: Choice): void => {
    element.innerText = choice;
}

// Update an HTMLElement's innerText based on a result
const updateElementWithResult = (element: HTMLElement, result: Result): void => {
    let resultDisplay: string;

    switch (result) {
        case Result.Draw:
            resultDisplay = "It's a draw!";
            break;
        case Result.Loss:
            resultDisplay = "You lose!";
            break;
        case Result.Win:
            resultDisplay = "You win!";
    }

    element.innerText = resultDisplay;
}

buttonElements.forEach(choice => choice.addEventListener("click", handleClick))