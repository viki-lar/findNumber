"use strict";

const game = function () {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  let num;
  let attempt = 10;
  let begineMessage;
  let answer;

  begineMessage = confirm("Хочешь сыграть в игру 'Угадай число?'");

  if (attempt !== 1) {
    if (begineMessage == true) {
      const round = function () {
        num = prompt("Введи число от 1 до 100");

        //проверка на отмену
        if (num == null) {
          alert("Игра окончена");
          game();
        }

        // проверка на число
        if (isNaN(num)) {
          num = alert("Введи число!");
          console.log(num);
          round();
        } else {
          num = +num;
          console.log(typeof num);

          //проверка на равенство

          if (num == secretNumber) {
            answer = confirm(
              "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
            );
            if (answer == true) {
              game();
            }
          }

          if (num > secretNumber) {
            attempt--;
            alert("Загаданное число меньше, осталось попыток" + " " + attempt);
            round();
          } else {
            if (num < secretNumber) {
              attempt--;
              alert("Загаданное число больше,осталось попыток" + " " + attempt);
              round();
            }
          }
        }
      };
      round();
    }
  } else {
    alert("Попытки закончились, хотите сыграть еще?");
  }
};

game();
