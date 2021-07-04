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
			const addZero = digit => {
				return digit < 10 ? '0' + digit : digit;
			};
			const timer = (getTimeRemaining());

			timerHours.textContent = timer.hours < 0 ? '00' : addZero(timer.hours);
			timerMinutes.textContent = timer.minutes < 0 ? '00' : addZero(timer.minutes);
			timerSeconds.textContent = timer.seconds < 0 ? '00' : addZero(timer.seconds);

			if (timer.timeRemaining < 0) {
				clearInterval(idInterval);
			}

		}, 1000);

	}

	countTimer('05 july 2021 12:00');

});