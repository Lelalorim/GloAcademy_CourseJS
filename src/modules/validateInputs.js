/* eslint-disable no-useless-escape */
import maskPhone from './maskPhone';

const validateInputs = () => {

	maskPhone('.form-phone');
	
	const phoneNumber = /номер телефона/gi,
		mailInput = /e-mail/gi,
		nameInput = /имя/gi;

	document.addEventListener('input', event => {
		const target = event.target;

		if (target.matches('.calc-block>input')) target.value = target.value.replace(/\D/g, '');

		if (phoneNumber.test(target.placeholder)) target.value = target.value.replace(/[^\d\+]/g, '');

		if (target.matches('.mess')) target.value = target.value.replace(/[^\.:,\!\?\-\s\dа-яё]/gi, '');

		if (nameInput.test(target.placeholder)) target.value = target.value.replace(/[^\sа-яё]/gi, '');

		if (mailInput.test(target.placeholder)) {
			target.value = target.value.replace(/[^\w@\-.!~*']/gi, '');
		}

	});

	document.addEventListener('blur', event => {
		const target = event.target;

		if (target.matches('input')) {

			target.value = target.value.trim()
				.replace(/^-*/g, '')
				.replace(/-*$/g, '')
				.replace(/-+/g, '-')
				.replace(/\s+/g, ' ');

			if (nameInput.test(target.placeholder) & (target.value.length > 0)) {
				let text = target.value.split(' ');
				text = text.reduce((acc, item) => acc +
					item[0].toUpperCase() + item.substring(1).toLowerCase() + ' ', '');
				target.value = text.trim();
			}
		}

	}, true);
};

export default validateInputs;