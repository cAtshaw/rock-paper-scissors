var _a, _b, _c, _d;
var Choice;
(function (Choice) {
    Choice["Rock"] = "Rock";
    Choice["Paper"] = "Paper";
    Choice["Scissors"] = "Scissors";
})(Choice || (Choice = {}));
var Result;
(function (Result) {
    Result[Result["Win"] = 0] = "Win";
    Result[Result["Loss"] = 1] = "Loss";
    Result[Result["Draw"] = 2] = "Draw";
})(Result || (Result = {}));
var ChoiceResultMap = (_a = {},
    _a[Choice.Rock] = (_b = {},
        _b[Choice.Scissors] = Result.Win,
        _b[Choice.Paper] = Result.Loss,
        _b),
    _a[Choice.Paper] = (_c = {},
        _c[Choice.Rock] = Result.Win,
        _c[Choice.Scissors] = Result.Loss,
        _c),
    _a[Choice.Scissors] = (_d = {},
        _d[Choice.Paper] = Result.Win,
        _d[Choice.Rock] = Result.Loss,
        _d),
    _a);
/**
 * Returns the members that an enum has
 * @param e An Enum
 * @returns Count of individual choices in enum
 */
var getMembersOfEnum = function (e) {
    return Object.keys(e).length;
};
// All caps as we want to show this is a proper constant
var CHOICE_LENGTH = getMembersOfEnum(Choice);
/**
 * Return a Choice that corresponds to a given input text
 * @param choice String that represents a Choic e
 * @returns The corresponding Choice
 */
var getChoiceFromString = function (choice) {
    switch (choice.toLowerCase()) {
        case 'rock':
            return Choice.Rock;
        case 'paper':
            return Choice.Paper;
        case 'scissors':
            return Choice.Scissors;
        default:
            throw new Error("Input \"".concat(choice, "\" doesn't correspond to a valid choice!"));
    }
};
/**
 * Generates a random Choice
 * @returns a random Choice
 */
var getRandomChoice = function () {
    var randomNumber = Math.floor(Math.random() * CHOICE_LENGTH) + 1;
    switch (randomNumber) {
        case 1:
            return Choice.Rock;
        case 2:
            return Choice.Paper;
        case 3:
            return Choice.Scissors;
    }
    ;
};
/**
 * Returns the outcome of the given choices
 * @param primary the choice of the player we want to know the outcome of
 * @param secondary the choice of the opposing player
 * @returns Result from the perspective of the primary choice
 */
var getResultFromChoices = function (primary, secondary) {
    if (primary === secondary) {
        return Result.Draw;
    }
    return ChoiceResultMap[primary][secondary];
};
var computerElement = document.getElementById("computer-choice");
var userElement = document.getElementById("user-choice");
var resultElement = document.getElementById("result");
var buttonElements = document.querySelectorAll("button");
var handleClick = function (e) {
    var choiceAsString = e.target.id;
    var userChoice = getChoiceFromString(choiceAsString);
    var computerChoice = getRandomChoice();
    var outcome = getResultFromChoices(userChoice, computerChoice);
    updateElementWithChoice(computerElement, computerChoice);
    updateElementWithChoice(userElement, userChoice);
    updateElementWithResult(resultElement, outcome);
};
// Update an HTMLElement's innerText based on a choice
var updateElementWithChoice = function (element, choice) {
    element.innerText = choice;
};
// Update an HTMLElement's innerText based on a result
var updateElementWithResult = function (element, result) {
    var resultDisplay;
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
};
buttonElements.forEach(function (choice) { return choice.addEventListener("click", handleClick); });
//# sourceMappingURL=app.js.map