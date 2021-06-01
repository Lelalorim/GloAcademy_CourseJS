'use strict';

let lang = prompt('Выберите язык: "en" или "ru"', 'ru'),
  kalendar = [
    ['Пн', ' Вт', ' Ср', ' Чт', ' Пт', ' Сб', ' Вс'],
    ['Sun', ' Mon', ' Tue', ' Wed', ' Thu', ' Fri', ' Sat']
  ],
  namePerson;

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

lang === 'ru' ? console.log('c.: ' + kalendar[0]) : console.log('c.: ' + kalendar[1]);

namePerson = prompt('Введите имя: ');
namePerson === 'Артем' ? console.log('директор') :
  namePerson === 'Максим' ? console.log('преподаватель') :
  namePerson === null || namePerson.trim() === '' ? console.error('Введите имя') :
  console.log('студент');