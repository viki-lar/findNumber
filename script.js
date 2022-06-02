"use strict";

let result = 60;
let num;
num = +prompt("Угадай число от 1 до 100");

//проверка на число
const checkNum = function (i) {
  if (isNaN(i)) {
    i = +prompt("Введи число!");
    num = i;
    checkNum(i);
  }
};

// //проверка на отмену
const checkCancell = function (i) {
  if (num === 0) {
    alert("Игра окончена");
  }
};

//проверка на равенство
const search = function (i) {
  if (i > result) {
    alert("Загаданное число меньше");
    i = +prompt("Введи другое число");
  } else {
    if (i < result) {
      alert("Загаданное число больше");
      i = +prompt("Введи другое число");
    } else {
      if (i == result) {
        alert("Поздравляю, Вы угадали!!!");
      }
    }
  }
  search(i);
};

checkNum(num);
checkCancell(num);
search(num);
console.log(num);
