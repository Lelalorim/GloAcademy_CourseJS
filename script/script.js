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

	countTimer('16 August 2021 07:00');

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

			if (screen.width > 768) {
				let stepLeft = -60;
				const popupBlock = document.querySelector('.popup-content');

				const popupOpen = () => {
					if (stepLeft < 40) {
						stepLeft += 5;
						popupBlock.style.left = stepLeft + "%";
						requestAnimationFrame(popupOpen);
					}
				};
				requestAnimationFrame(popupOpen);
			}


		}));

		popupClose.addEventListener('click', () => {

			if (screen.width > 768) {
				let stepLeft = 40;
				const popupBlock = document.querySelector('.popup-content');

				const popupClose = () => {
					if (stepLeft === -60) {
						popup.style.display = 'none';
						cancelAnimationFrame(popupClose);
						return;
					}
					stepLeft -= 5;
					popupBlock.style.left = stepLeft + "%";
					requestAnimationFrame(popupClose);
				};
				requestAnimationFrame(popupClose);
			} else {
				popup.style.display = 'none';

			}

		});

	};

	togglePopup();

	// Scroll to element onclick() menuItem


});