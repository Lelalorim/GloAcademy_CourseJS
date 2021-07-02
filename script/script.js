window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// Timer
	function countTimer(deadline) {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
			return {
				timeRemaining,
				hours,
				minutes,
				seconds
			};

		}

		const idInterval = setInterval(() => {
			const timer = (getTimeRemaining());

			timerHours.textContent = timer.hours < 0 ? '00' : timer.hours < 10 ? '0' +
				timer.hours : timer.hours;
			timerMinutes.textContent = timer.minutes < 0 ? '00' : timer.minutes < 10 ? '0' +
				timer.minutes : timer.minutes;
			timerSeconds.textContent = timer.seconds < 0 ? '00' : timer.seconds < 10 ? '0' +
				timer.second : timer.seconds;

			if (timer.timeRemaining < 0) {
				clearInterval(idInterval);
			}

		}, 1000);

	}

	countTimer('03 july 2021');

});