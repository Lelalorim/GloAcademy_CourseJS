'use strict';

function letsPlay() {

  let count = 10;
  const countMax = count + 1,
    getRandomNumber = Math.floor(Math.random() * 100) + 1;

  const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  const gameOver = function () {
    alert('Игра окончена.');
  };
  const letAnotherGame = function () {
    confirm('Попытки закончились, хотите сыграть еще?') ?
      letsPlay() :
      gameOver();
  };
  const gameWin = function () {
    confirm(`Поздравляю, Вы угадали!!! Осталось попыток ${count}
      Хотели бы сыграть еще?`) ?
      letsPlay() :
      gameOver();
  };

  function getAnswer(ans) {
    if (count === 0) {
      return letAnotherGame();
    }
    ans = +prompt('Введи число от 1 до 100.');
    console.log(`Попытка ${countMax-count}: ${ans}`);
    if (!isNumber(ans) || ans > 100) {
      return getAnswer();
    }

    function checkAnswer(count) {

      if (ans === getRandomNumber) {
        gameWin();
      }
      if (ans === 0) {
        gameOver();
        return;
      }
      if (ans < getRandomNumber) {
        alert(`Загаданное число больше, осталось попыток ${count}.`);
        getAnswer();
      }
      if (ans > getRandomNumber) {
        alert(`Загаданное число меньше, осталось попыток ${count}.`);
        getAnswer();
      }
    }

    return checkAnswer(--count);
  }

  confirm('Угадай число от 1 до 100.') ? getAnswer() : gameOver();
}

letsPlay();