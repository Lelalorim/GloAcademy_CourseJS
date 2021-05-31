'use strict';

let lang = prompt('Выберите язык: "en" или "ru"', 'ru'),
  kalendar = [
    ['Пн', ' Вт', ' Ср', ' Чт', ' Пт', ' Сб', ' Вс'],
    ['Sun', ' Mon', ' Tue', ' Wed', ' Thu', ' Fri', ' Sat']
  ],
  namePerson;

if (lang === 'ru') {
  console.log('a.: Пн, Вт, Ср, Чт, Пт, Сб, Вс');
} else if (lang === 'en') {
  console.log('a.: Sun, Mon, Tue, Wed, Thu, Fri, Sat');
} else {
  alert('Нужно ввести "en" или "ru"');
  console.log('Нужно ввести "en" или "ru"');
}

switch (lang) {
  case 'ru':
    console.log('b.: Пн, Вт, Ср, Чт, Пт, Сб, Вс');
    break;
  case 'en':
    console.log('b.: Sun, Mon, Tue, Wed, Thu, Fri, Sat');
    break;
}

lang === 'ru' ? console.log('c.: ' + kalendar[0]) : console.log('c.: ' + kalendar[1]);

namePerson = prompt('Введите имя: ');
namePerson === 'Артем' ? console.log('директор') :
  namePerson === 'Максим' ? console.log('преподаватель') :
  console.log('студент');