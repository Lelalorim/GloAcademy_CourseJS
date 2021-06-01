'use strict';

let lang = prompt('Выберите язык: "en" или "ru"', 'ru'),
  kalendar = [
    ['Пн', ' Вт', ' Ср', ' Чт', ' Пт', ' Сб', ' Вс'],
    ['Sun', ' Mon', ' Tue', ' Wed', ' Thu', ' Fri', ' Sat']
  ],
  kalendarMap = new Map(),
  namePerson;

kalendarMap.set('en', kalendar[1]);
kalendarMap.set('ru', kalendar[0]);

if (lang === 'ru') {
  console.log(`a.: ${kalendar[0]}`);
} else if (lang === 'en') {
  console.log(`a.: ${kalendar[1]}`);
} else {
  alert('Нужно ввести "en" или "ru"');
  console.log('Нужно ввести "en" или "ru"');
}

switch (lang) {
  case 'ru':
    console.log(`b.: ${kalendar[0]}`);
    break;
  case 'en':
    console.log(`b.: ${kalendar[1]}`);
    break;
}

console.log('c.: ' + kalendarMap.get(`${lang}`));

namePerson = prompt('Введите имя: ');
namePerson === 'Артем' ? console.log('директор') :
  namePerson === 'Максим' ? console.log('преподаватель') :
  namePerson === null || namePerson.trim() === '' ? console.error('Введите имя') :
  console.log('студент');