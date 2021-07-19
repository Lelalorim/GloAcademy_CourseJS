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
			popupClose = document.querySelector('.popup-close');

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

		document.addEventListener('click', event => {
			if (!event.target.matches('.popup-btn')) return;
			popupAnimateOpen();
		});

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

			if (!target.matches('.dot, .portfolio-btn')) {
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

	//OurTeam block
	const ourTeamBlock = document.getElementById('command');
	let oldSrcImg = '';

	ourTeamBlock.addEventListener('mouseover', event => {
		if (event.target.matches('img')) {
			oldSrcImg = event.target.src;
			event.target.src = event.target.dataset.img;
		}
	});
	ourTeamBlock.addEventListener('mouseout', event => {
		if (event.target.matches('img')) {
			event.target.src = oldSrcImg;
		}
	});

	//validate inputs
	const phoneNumber = /номер телефона/gi,
		mailInput = /e-mail/gi,
		nameInput = /имя/gi;

	document.addEventListener('input', event => {
		const target = event.target;

		if (target.matches('.calc-block>input')) target.value = target.value.replace(/\D/g, '');

		if (phoneNumber.test(target.placeholder)) target.value = target.value.replace(/[^\d-()]/g, '');

		if (target.matches('.mess')) target.value = target.value.replace(/[^\-\sа-я]/gi, '');

		if (nameInput.test(target.placeholder)) target.value = target.value.replace(/[^\-\sа-я]/gi, '');

		if (mailInput.test(target.placeholder)) {
			target.value = target.value.replace(/[^\w@\-.!~*']/gi, '');
		}

	});

	document.addEventListener('blur', event => {
		const target = event.target;

		if (target.matches('input')) {

			target.value = target.value.trim();
			target.value = target.value.replace(/^-*/g, '');
			target.value = target.value.replace(/-*$/g, '');
			target.value = target.value.replace(/-+/g, '-');
			target.value = target.value.replace(/\s+/g, ' ');

			if (nameInput.test(target.placeholder) & (target.value.length > 0)) {
				let text = target.value.split(' ');
				text = text.reduce((acc, item) => acc +
					item[0].toUpperCase() + item.substring(1).toLowerCase() + ' ', '');
				target.value = text.trim();
			}
		}

	}, true);

	// Calculator

	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcDay = document.querySelector('.calc-day'),
			calcCount = document.querySelector('.calc-count'),
			totalValue = document.getElementById('total');

		function animateTotal(num) {
			const time = 1000,
				step = price * calcCount.value;
			let n = 0;
			const t = Math.round(time / num / step);
			const interval = setInterval(() => {
				n += step;
				if (n === num) {
					clearInterval(interval);
				}
				if (n > num) {
					clearInterval(interval);
					return;
				}

				totalValue.textContent = n;
			}, t);

		}

		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1;

			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * dayValue * countValue;
				animateTotal(total);
			}

		};

		calcBlock.addEventListener('change', event => {
			const target = event.target;

			if (target.matches('.calc-type') || target.matches('.calc-square') ||
				target.matches('.calc-day') || target.matches('.calc-count')) {
				countSum();
			}
		});
	};

	calc(100);

});