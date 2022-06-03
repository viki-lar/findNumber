"use strict";

let secretNumber = Math.floor(Math.random() * 100) + 1;
let num;
const game = function () {
  function input() {
    num = +prompt("Угадай число от 1 до 100");
    checkNum(num);
  }
  //проверка на число
  const checkNum = function (i) {
    if (isNaN(i)) {
      i = +prompt("Введи число!");
      num = i;
      checkNum(i);
      7;
    } else {
      // // //проверка на отмену
      if (i === 0) {
        alert("Игра окончена");
      }
    }
  };
  input(num);

  const search = function (i) {
    if (i == secretNumber) {
      alert("Поздравляю, Вы угадали!!!");
    } else {
      if (i > secretNumber) {
        alert("Загаданное число меньше");

        game();
      } else {
        if (i < secretNumber) {
          alert("Загаданное число больше");

          game();
        }
      }
    }
  };
  search(num);
};
game();
