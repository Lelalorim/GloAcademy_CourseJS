const smoothScroll = target => {

		event.preventDefault();
		const id = target.getAttribute('href').substring(1);

		if (!id.length) return;

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

				if (target.getAttribute('href') === '#') {
					event.preventDefault();
					return;
				}
				
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

	export default toggleMenu;