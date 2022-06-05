"use strict";

const game = function () {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let num = "";
  let attempt = 10;
  let begineMessage;
  let answer;

  const round = function () {
    num = prompt("Введи число от 1 до 100");

    //проверка на отмену
    if (num == null || num == 0) alert("Игра окончена");
    else {
      // проверка на число
      if (isNaN(num)) {
        alert("Введи число!");
        round();
      } else {
        num = +num;

        //проверка на равенство

        if (num == secretNumber) {
          answer = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          if (answer) {
            game();
          }
        }

        if (num > secretNumber) {
          alert("Загаданное число меньше, осталось попыток" + " " + attempt);
        } else if (num < secretNumber) {
          alert("Загаданное число больше,осталось попыток" + " " + attempt);
        }
        attempt--;
        round();
      }
    }
  };

  begineMessage = confirm("Хочешь сыграть в игру 'Угадай число?'");

  if (begineMessage) {
    if (attempt > 1) {
      round();
    } else {
      begineMessage = confirm("Попытки закончились, хотите сыграть еще?");
    }
  }
};

game();
