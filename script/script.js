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

	const smoothScroll = target => {

		event.preventDefault();
		const id = target.getAttribute('href').substring(1);

		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
		});

	};

	// Menu
	const toggleMenu = () => {

		const menu = document.querySelector('menu'),
			mainBtn = document.querySelector('main>a');

		const handlerMenu = () => menu.classList.toggle('active-menu');

		document.addEventListener('click', event => {
			let target = event.target;

			if (target.matches('.portfolio-btn, .dot')) {
				return;
			}

			if (!event.target.closest('menu')) {
				menu.classList.remove('active-menu');
			}

			if (target.closest('a') === mainBtn) {
				smoothScroll(target.closest('a'));
			} else if (event.target.classList.contains('close-btn')) {
				event.preventDefault();
				handlerMenu();
			} else if (event.target.closest('a')) {
				target = event.target.closest('a');
				smoothScroll(target);
				handlerMenu();
			}

			if (event.target.closest('div')) {
				if (event.target.closest('div').classList.contains('menu')) {
					handlerMenu();
				}
			}
		});

	};

	toggleMenu();

	// popup
	const togglePopup = () => {
		const popup = document.querySelector('.popup'),
			popupClose = document.querySelector('.popup-close'),
			popupBtn = document.querySelectorAll('.popup-btn');

		const popupAnimateOpen = () => {
			const popupBlock = document.querySelector('.popup-content');
			popup.style.display = 'block';
			if (document.documentElement.clientWidth >= 768) {
				const step = 5;
				let stepLeft = -60;

				const popupOpen = () => {
					if (stepLeft < 40) {
						stepLeft += step;
						popupBlock.style.left = stepLeft + "%";
						requestAnimationFrame(popupOpen);
					}
				};
				requestAnimationFrame(popupOpen);
			}
		};
		const popupAnimateClose = () => {
			const popupBlock = document.querySelector('.popup-content');
			if (document.documentElement.clientWidth >= 768) {
				let stepLeft = 40;
				const step = -5;
				const popupClose = () => {
					if (stepLeft === -60) {
						popup.style.display = 'none';
						cancelAnimationFrame(popupClose);
						popupBlock.style.left = '';
						return;
					}
					stepLeft += step;
					popupBlock.style.left = stepLeft + "%";
					requestAnimationFrame(popupClose);
				};
				requestAnimationFrame(popupClose);
			} else {
				popup.style.display = 'none';

			}
			popupBlock.style.left = '';
		};

		popupBtn.forEach(elem => elem.addEventListener('click', popupAnimateOpen));

		popupClose.addEventListener('click', popupAnimateClose);

		popup.addEventListener('click', event => {
			let target = event.target;

			if (target.classList.contains('popup-close')) {
				popupAnimateClose();
			} else {

				target = target.closest('.popup-content');

				if (!target) {
					popupAnimateClose();
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

	//Slider

	const slider = () => {
		const slides = document.querySelectorAll('.portfolio-item'),
			slider = document.querySelector('.portfolio-content'),
			dotsList = document.querySelector('.portfolio-dots');


		dotsList.innerHTML = '';
		for (let i = 0; i < slides.length; i++) {
			const newElem = document.createElement('li');
			newElem.classList.add('dot');
			dotsList.append(newElem);
		}

		const dots = document.querySelectorAll('.dot');
		dots[0].classList.add('dot-active');

		let currentSlide = 0,
			interval;

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySLide = () => {
			prevSlide(slides, currentSlide, 'portfolio-item-active');
			prevSlide(dots, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slides.length) currentSlide = 0;
			console.log(currentSlide);
			nextSlide(slides, currentSlide, 'portfolio-item-active');
			nextSlide(dots, currentSlide, 'dot-active');
		};

		const startPlaySlide = (time = 3000) => {
			interval = setInterval(autoPlaySLide, time);

		};

		const stopPlaySlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', event => {
			event.preventDefault();

			const target = event.target;
			console.log('slider');
			if (!target.matches('.dot, .portfolio-btn')) {
				console.log('прерываем переключение');
				return;
			}

			prevSlide(slides, currentSlide, 'portfolio-item-active');
			prevSlide(dots, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dots.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slides.length) currentSlide = 0;
			if (currentSlide < 0) currentSlide = (slides.length - 1);

			nextSlide(slides, currentSlide, 'portfolio-item-active');
			nextSlide(dots, currentSlide, 'dot-active');

		});

		slider.addEventListener('mouseover', event => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) stopPlaySlide();
		});

		slider.addEventListener('mouseout', event => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) startPlaySlide();
		});

		startPlaySlide(1500);
	};

	slider();

});