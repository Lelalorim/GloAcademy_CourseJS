class Validator {
	constructor({
		selector,
		pattern = {},
		method
	}) {
		this.form = document.querySelector(selector);
		this.pattern = pattern;
		this.method = method;
		this.elementsForm = [...this.form.elements].filter(item => {
			return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
		});
		this.error = new Set();
	}

	init() {
		this.applyStyle();
		this.setPattern;
		this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
		this.form.addEventListener('submit', e => {
			this.elementsForm.forEach(elem => this.checkIt({
				target: elem
			}));
			if (this.error.size) {
				e.preventDefault;
			}else{
			}
		});

	}

	isValid(elem) {

		const validatorMethod = {
			notEmpty(elem) {
				if (elem.value.trim() === '') return false;
			},
			pattern(elem, pattern) {
				return pattern.test(elem.value);
			}

		};

		if (this.method) {
			const method = this.method[elem.id];

			if (method) {
				return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
			}
		}

		return true;
	}

	checkIt(event) {
		const target = event.target;

		if (this.isValid(target)) {
			this.showSuccess(target);
			this.error.delete(target);
			target.form.querySelector('.form-btn').disabled = false;
		} else {
			this.showError(target);
			this.error.add(target);
			target.form.querySelector('.form-btn').disabled = true;
		}

	}

	showError(elem) {
		elem.classList.remove('success');
		elem.classList.add('error');
		if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) return;
		const errorDiv = document.createElement('div');
		errorDiv.textContent = 'Ошибка в этом поле';
		errorDiv.classList.add('validator-error');
		elem.insertAdjacentElement('afterend', errorDiv);
	}

	showSuccess(elem) {
		elem.classList.remove('error');
		elem.classList.add('success');
		if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
			elem.nextElementSibling.remove();
		}
	}

	applyStyle() {
		const style = document.createElement('style');
		style.textContent = `
			input.success {
				border: 2px solid green !important;
			}
			input.error {
				border: 2px solid red !important;
			}
			.validator-error {
				font-size: 12px;
				font-family: sans-serif;
				color: red;
			}
		`;

		document.head.appendChild(style);
	}

	setPattern() {

		if (!this.pattern.phone) this.pattern.phone = /^\+?[78]([()-]*\d){10}$/;

		if (!this.pattern.email) this.pattern.email = /^\w+@\w+\.\w{2,}$/;
	}

}

const form1 = new Validator({
  selector: '#form1',
  pattern: {
    name: /[А-Яа-яёЁ]/,
    email: /^\w+@\w+\.\w{2,}$/,
    phone: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
  },
  method: {
    'form1-name': [
      ['pattern', 'name'],
    ],
    'form1-email': [
      ['pattern', 'email'],
    ],
    'form1-phone': [
      ['pattern', 'phone'],
    ],
  },
});
const form2 = new Validator({
  selector: '#form2',
  pattern: {
    name: /[А-Яа-яёЁ]+/,
    mess: /[А-Яа-яёЁ\s\.]+/,
    email: /^\w+@\w+\.\w{2,}$/,
    phone: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
  },
  method: {
    'form2-name': [
      ['pattern', 'name'],
    ],
    'form2-message': [
      ['pattern', 'mess'],
    ],
    'form2-email': [
      ['pattern', 'email'],
    ],
    'form2-phone': [
      ['pattern', 'phone'],
    ],
  },
});
const form3 = new Validator({
  selector: '#form3',
  pattern: {
    name: /[А-Яа-яёЁ]/,
    email: /^\w+@\w+\.\w{2,}$/,
    phone: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
  },
  method: {
    'form3-name': [
      ['pattern', 'name'],
    ],
    'form3-email': [
      ['pattern', 'email'],
    ],
    'form3-phone': [
      ['pattern', 'phone'],
    ],
  },
});

form1.init();
form2.init();
form3.init();