'use strict';

const span1 = document.querySelector('#task1');
const span2 = document.querySelector('#task2');

const dateNowTask2 = setInterval(function () {

  const date = new Date();
  const year = date.getFullYear(),
    month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth(),
    day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  span2.textContent = `${day}.${month}.${year} - ${hour}:${minutes}:${seconds}`;
}, 1000);

dateNowTask2();

const dateNowTask1 = setInterval(function () {

  let date = new Date();

  const formattedDate = () => {

    year = date.getFullYear() + ' года';
    month = month.slice(0, month.length - 1) + 'я';
    dayWeek = dayWeek[0].toUpperCase() + dayWeek.slice(1);
    day = date.getDate();
    hour = hour;
    minutes = minutes;
    seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  }

  span1.textContent = `Сегодня ${dayWeek}, ${day} ${month} ${year}, ${hour} ${minutes} ${seconds}`;

}, 1000);


dateNowTask1(); //Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды