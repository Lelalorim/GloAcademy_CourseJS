'use strict';

const addZero = digit => digit < 10 ? `0${digit}` : digit;

window.addEventListener('DOMContentLoaded', () => {

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

			timerHours.textContent = timer.hours < 0 ? '00' : addZero(timer.hours);
			timerMinutes.textContent = timer.minutes < 0 ? '00' : addZero(timer.minutes);
			timerSeconds.textContent = timer.seconds < 0 ? '00' : addZero(timer.seconds);

			if (timer.timeRemaining < 0) {
				clearInterval(idInterval);
			}

		}, 1000);
	}

	countTimer('15 july 2021 14:27');

	// Menu
	const toogleMenu = () => {

		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('ul>li');

		const handlerMenu = () => menu.classList.toggle('active-menu');

		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);
		menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

	};

	toogleMenu();

	// popup
	const togglePopup = () => {
		const popup = document.querySelector('.popup'),
			popupClose = document.querySelector('.popup-close'),
			popupBtn = document.querySelectorAll('.popup-btn');

		popupBtn.forEach(elem => elem.addEventListener('click', () => {
			popup.style.display = 'block';

			//	if (screen > 768) {
			let stepLeft = -110;
			const popupBlock = document.querySelector('.popup-content');

			function popupOpen() {
				if (stepLeft < 38) {
					stepLeft += 5;
					popupBlock.style.left = stepLeft + "%";
					requestAnimationFrame(popupOpen);
				}
			}
			requestAnimationFrame(popupOpen);
			//	}


		}));

		popupClose.addEventListener('click', () => {
			popup.style.display = 'none';
		});

		// popupOpen();


	};

	togglePopup();

});