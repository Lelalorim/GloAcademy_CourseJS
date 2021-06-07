'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
  gameOver = function () {
    alert('Игра окончена.');
  },
  gameWin = function () {
    alert('Поздравляю, Вы угадали!!!');
  };

function letsPlay() {

  const getRandomNumber = Math.floor(Math.random() * 100) + 1;

  function getAnswer(ans) {
    ans = +prompt('Введи число от 1 до 100.');
    console.log(ans);
    if (!isNumber(ans) || ans > 100) {
      return getAnswer();
    }

    function checkAnswer() {
      if (ans === getRandomNumber) {
        gameWin();
      } else if (ans === 0) {
        gameOver();
      } else if (ans < getRandomNumber) {
        alert('Загаданное число больше');
        getAnswer();
      } else {
        alert('Загаданное число меньше');
        getAnswer();
      }
    }
    return checkAnswer();
  }

  confirm('Угадай число от 1 до 100.') ? getAnswer() : gameOver();
}

letsPlay();