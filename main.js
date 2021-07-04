'use strict';

const deadline = '01 January 2022',
	date = new Date(),
	targetDate = new Date(deadline).getTime(),
	hour = date.getHours(),
	currentWeekDay = date.toLocaleString('ru', {
		weekday: 'long'
	}),
	currentTime = date.toLocaleTimeString('en'),
	daysRemaning = Math.floor((targetDate - date.getTime()) / 1000 / 60 / 60 / 24),
	timesOfDay = [
		'Доброе утро',
		'Добрый день',
		'Добрый вечер',
		'Доброй ночи'
	];


function declension(number, word) {
	const cases = [2, 0, 1, 1, 1, 2];
	return word[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function toUpperCaseFirstChar(word) {
	return word[0].toUpperCase() + word.substring(1);
}

function getTimesOfDay(hour) {
	if (hour > '04' && hour <= '11') {
		return timesOfDay[0];
	}
	if (hour > '11' && hour <= '16') {
		return timesOfDay[1];
	}
	if (hour > '16' && hour <= '22') {
		return timesOfDay[2];
	} else {
		return timesOfDay[3];
	}
}

const span = document.querySelectorAll('span');

span[0].textContent = getTimesOfDay(hour);
span[1].textContent = `Сегодня: ${toUpperCaseFirstChar(currentWeekDay)}`;
span[2].textContent = `Текущее время ${currentTime}`;
span[3].textContent = `До нового года осталось ${daysRemaning} ${declension(daysRemaning, ['день', 'дня', 'дней'])}`;