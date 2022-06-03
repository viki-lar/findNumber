"use strict";

let result = 60;
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
    if (i == result) {
      alert("Поздравляю, Вы угадали!!!");
    } else {
      if (i > result) {
        alert("Загаданное число меньше");
        input(num);
      } else {
        if (i < result) {
          alert("Загаданное число больше");
          input(num);
        }
      }
    }
    search(i);
  };
  search(num);
};
game();
