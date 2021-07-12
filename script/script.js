/* eslint-disable no-confusing-arrow */
/* eslint-disable strict */
window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const addZero = digit => digit < 10 ? `0${digit}` : digit;

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
	const toggleMenu = () => {

		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn');

		const handlerMenu = () => menu.classList.toggle('active-menu');

		const smoothScroll = event => {
			console.log('event: ', event);
			event.preventDefault();
			const target = event.target.closest('a');

			const id = target.getAttribute('href').substring(1);

			document.getElementById(id).scrollIntoView({
				behavior: 'smooth',
			});

		};

		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);
		document.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('a');
			console.log('target: ', target);
			if (target === document.querySelector('a[href="#service=block"]')) {
				smoothScroll(event);
			}
		});

	};



	toggleMenu();

	// popup
	const togglePopup = () => {
		const popup = document.querySelector('.popup'),
			popupClose = document.querySelector('.popup-close'),
			popupBtn = document.querySelectorAll('.popup-btn');

		popupBtn.forEach(elem => elem.addEventListener('click', () => {
			popup.style.display = 'block';

			if (document.documentElement.clientWidth >= 768) {
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
			const popupBlock = document.querySelector('.popup-content');

			if (document.documentElement.clientWidth >= 768) {
				let stepLeft = 40;

				const popupClose = () => {
					if (stepLeft === -60) {
						popup.style.display = 'none';
						cancelAnimationFrame(popupClose);
						popupBlock.style.left = '';
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
			popupBlock.style.left = '';
		});

		popup.addEventListener('click', event => {
			let target = event.target;

			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
			} else {

				target = target.closest('.popup-content');

				if (!target) {
					popup.style.display = 'none';
				}
			}

		});

	};

	togglePopup();

	// Tabs
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = document.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.service-header-tab');

			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	};

	tabs();

});