"use strict";

let secretNumber = Math.floor(Math.random() * 100) + 1;
let num;
let attempt = 10;

const game = function () {
  // ввод значения
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

  //проверка на количество попыток
  if (attempt !== 1) {
    //проверка на равенство
    const search = function (i) {
      attempt--;
      if (i == secretNumber) {
        alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
        attempt = 10;
        game();
      } else {
        if (i > secretNumber) {
          alert("Загаданное число меньше, осталось попыток" + " " + attempt);

          game();
        } else {
          if (i < secretNumber) {
            alert("Загаданное число больше,осталось попыток" + " " + attempt);

            game();
          }
        }
      }
    };
    search(num);
  } else {
    alert("Попытки закончились, хотите сыграть еще?");
  }
};
game();
