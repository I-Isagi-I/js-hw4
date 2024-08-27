function calculateAge(name, birthYear, currentYear) {
    let age = currentYear - birthYear;
    return name + ', Ваш возраст ' + age;
}

let userName = prompt('Введите ваше имя');
let userBirthYear = +prompt('Введите ваш год рождения');
let currentYear = +prompt('Введите нынешний год');

let result = calculateAge(userName, userBirthYear, currentYear);
console.log(result);


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator() {
    const operators = ['+', '-', '*', '/'];
    return operators[Math.floor(Math.random() * operators.length)];
}

function generatePrimer() {
    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    let operator = getRandomOperator();

    if (operator === '/') {
        num1 = num1 * num2;
    }

    let primer = num1 + ' ' + operator + ' ' + num2;
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            break;
    }

    return {
        primer: primer,
        correctAnswer: correctAnswer
    };
}

function mathQuiz() {
    let numberOfProblems = +prompt('Как много примеров вы хотите решить?');
    let correctCount = 0;

    for (let i = 0; i < numberOfProblems; i++) {
        let primerData = generatePrimer();
        let userAnswer = +prompt(primerData.primer + ' =');

        if (userAnswer === primerData.correctAnswer) {
            alert('Ваш ответ верный - ' + userAnswer);
            correctCount++;
        } else {
            alert('Ваш ответ не верный - ' + userAnswer + '. Правильный ответ - ' + primerData.correctAnswer + '!');
        }
    }

    alert('Вы решили правильно ' + correctCount + ' из ' + numberOfProblems + ' примеров.');
}

mathQuiz();