"use strict";

const game = function () {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let num = "";
  let attempt = 10;
  let begineMessage;
  let answer;

  const round = function () {
    if (attempt != 0) {
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
            answer = confirm(
              "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
            );
            if (answer) {
              game();
            }
          }

          if (num > secretNumber) {
            attempt--;
            alert("Загаданное число меньше, осталось попыток" + " " + attempt);
            round();
          } else if (num < secretNumber) {
            attempt--;
            alert("Загаданное число больше,осталось попыток" + " " + attempt);
            round();
          }
        }
      }
    } else {
      answer = confirm("Попытки закончились, хотите сыграть еще?");
    }
  };

  round();
};

game();
