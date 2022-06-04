"use strict";

let secretNumber = Math.floor(Math.random() * 100) + 1;
let num;
let attempt = 10;

// описание функций

//проверка на число
const checkNum = function (userInput) {
  if (isNaN(userInput)) {
    userInput = +prompt("Введи число!");
    num = userInput;
    checkNum(userInput);
  }
  // // //проверка на отмену
  if (userInput === 0) {
    alert("Игра окончена");
  }
};

//проверка на равенство
const search = function (userNum) {
  attempt--;
  if (userNum == secretNumber) {
    alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    attempt = 10;
    game();
  } else {
    if (userNum > secretNumber) {
      alert("Загаданное число меньше, осталось попыток" + " " + attempt);

      game();
    } else {
      if (userNum < secretNumber) {
        alert("Загаданное число больше,осталось попыток" + " " + attempt);

        game();
      }
    }
  }
};

// вызов функций

const game = function () {
  // ввод значения
  num = +prompt("Угадай число от 1 до 100");
  checkNum(num);

  //проверка на количество попыток
  if (attempt !== 1) {
    search(num);
  } else {
    alert("Попытки закончились, хотите сыграть еще?");
  }
};
game();
