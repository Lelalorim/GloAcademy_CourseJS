'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const date = new Date(),
  dateNow = date.toLocaleString('ru', {
    weekday: 'long'
  });

for (let i = 0; i < week.length; i++) {
  if (week[i].toLowerCase() === dateNow) {
    console.log("%c" + week[i], "font-weight: 900;");
  } else if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    console.log("%c" + week[i], "font-style: italic;color: indigo;");
  } else {
    console.log(week[i]);
  }
}