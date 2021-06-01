'use strict';

let lang = prompt('Выберите язык: "en" или "ru"', 'ru'),
  kalendarMap = new Map(),
  namePerson;

kalendarMap.set('ru', ['Пн', ' Вт', ' Ср', ' Чт', ' Пт', ' Сб', ' Вс']);
kalendarMap.set('en', ['Sun', ' Mon', ' Tue', ' Wed', ' Thu', ' Fri', ' Sat']);

if (lang === 'ru') {
  console.log(`a.: ${kalendarMap.get(lang)}`);
} else if (lang === 'en') {
  console.log(`a.: ${kalendarMap.get(lang)}`);
} else {
  alert('Нужно ввести "en" или "ru"');
  console.log('Нужно ввести "en" или "ru"');
}

switch (lang) {
  case 'ru':
    console.log(`b.: ${kalendarMap.get(lang)}`);
    break;
  case 'en':
    console.log(`b.: ${kalendarMap.get(lang)}`);
    break;
}

console.log(`c.: ${kalendarMap.get(lang)}`);

namePerson = prompt('Введите имя: ');
namePerson === 'Артем' ? console.log('директор') :
  namePerson === 'Максим' ? console.log('преподаватель') :
  namePerson === null || namePerson.trim() === '' ? console.error('Введите имя') :
  console.log('студент');