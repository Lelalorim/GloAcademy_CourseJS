'use strict';

let lang = prompt('Выберите язык: "en" или "ru"', 'ru'),
  kalendarMap = new Map([
    ['ru', ['Пн', ' Вт', ' Ср', ' Чт', ' Пт', ' Сб', ' Вс']],
    ['en', ['Sun', ' Mon', ' Tue', ' Wed', ' Thu', ' Fri', ' Sat']]
  ]),
  kalendar = `${kalendarMap.get(lang)}`,
  namePerson;

if (lang === 'ru') {
  console.log(`a.: ${kalendar}`);
} else if (lang === 'en') {
  console.log(`a.: ${kalendar}`);
} else {
  alert('Нужно ввести "en" или "ru"');
  console.log('Нужно ввести "en" или "ru"');
}

switch (lang) {
  case 'ru':
    console.log(`b.: ${kalendar}`);
    break;
  case 'en':
    console.log(`b.: ${kalendar}`);
    break;
}

console.log(`c.: ${kalendar}`);

namePerson = prompt('Введите имя: ');
namePerson === 'Артем' ? console.log('директор') :
  namePerson === 'Максим' ? console.log('преподаватель') :
  namePerson === null || namePerson.trim() === '' ? console.error('Введите имя') :
  console.log('студент');