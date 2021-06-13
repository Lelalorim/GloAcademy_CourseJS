'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const date = new Date(),
  dateNow = date.toLocaleString('ru', {
    weekday: 'long'
  });

week.forEach(elem => {
  let html = elem;
  if (elem.toLowerCase() === dateNow) {
    html = html.bold();
  }

  if (elem.toLowerCase() === 'суббота' || elem.toLowerCase() === 'воскресенье') {
    html = html.italics();
  }

  const div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
});