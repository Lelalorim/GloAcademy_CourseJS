const smoothScroll = target => {

	event.preventDefault();
	const id = target.getAttribute('href').substring(1);

	if (!id.length) return;

	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
	});

};

export default smoothScroll;