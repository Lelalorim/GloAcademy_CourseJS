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

const dateNowTask1 = setInterval(function () {

  let date = new Date();
  let year = date.getFullYear(),
    month = date.toLocaleString('ru', {
      month: 'long'
    }),
    dayWeek = date.toLocaleString('ru', {
      weekday: 'long'
    }),
    day = date.getDate().toString(),
    hour = date.getHours().toString(),
    minutes = date.getMinutes().toString(),
    seconds = date.getSeconds().toString();

  const formattedDate = () => {

    year += ' года';
    month = month.slice(0, month.length - 1) + 'я';
    dayWeek = dayWeek[0].toUpperCase() + dayWeek.slice(1);
    day = day;
    hour = hour === '1' ? hour + ' час' :
      hour > 1 && hour < 5 ? hour + ' часа' : hour + ' часов';
    minutes = minutes > 10 && minutes < 15 ? minutes + ' минут' : minutes.slice(-1) === '1' ? minutes + ' минута' : minutes.slice(-1) > 1 && minutes.slice(-1) < 5 ? minutes + ' минуты' : minutes + ' минут';
    seconds = seconds.slice(-1) === '1' ? seconds + ' секунда' : seconds.slice(-1) > 1 && seconds.slice(-1) < 5 ? seconds + ' секунды' : seconds + ' секунд';

    span1.textContent = `Сегодня ${dayWeek}, ${day} ${month} ${year}, ${hour} ${minutes} ${seconds}`;
  };
  formattedDate();


}, 1000);


//dateNowTask1(); //Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды