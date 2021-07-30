// eslint-disable-next-line strict
'use strict';

const list = document.getElementById('list');

const users = (!localStorage.getItem('users')) ? [] : JSON.parse(localStorage.getItem('users'));

const toLocalStorage = data => {
	localStorage.setItem('users', JSON.stringify(data));
};

const generateKey = () =>
	Math.random().toString(36).substring(2, 15) +
	Math.random().toString(36).substring(2, 15);

const formatName = word => word[0].toUpperCase() + word.substring(1);

const formatDate = date => {
	let dateReg = new Date(date);
	const addZero = digit => (digit < 10 ? `0${digit}` : digit);
	const year = dateReg.getFullYear(),
		month = dateReg.toLocaleString('ru', {
			month: 'long'
		}),
		day = addZero(dateReg.getDate()),
		hour = addZero(dateReg.getHours()),
		minutes = addZero(dateReg.getMinutes()),
		seconds = addZero(dateReg.getSeconds());

	return dateReg = `
		${day} ${month.slice(0, month.length - 1)}я ${year}г., ${hour}:${minutes}:${seconds}
		`;
};

const addLi = () => {

	users.forEach(user => {
		const li = document.createElement('li');
		const delBtn = document.createElement('button');
		delBtn.classList.add('del-btn');
		delBtn.textContent = 'удалить';
		li.key = user.key;
		li.textContent = `
		Имя: ${user.firstName}, фамилия ${user.secondName},
		зарегистрирован ${formatDate(user.regDate)}
		`;
		li.insertAdjacentElement('beforeend', delBtn);
		list.append(li);
	});
};

const render = () => {
	toLocalStorage(users);
	list.innerHTML = '';
	addLi();
};

const authUser = () => {

	const heading = document.getElementById('username');
	const loginUser = prompt('Введите логин', 'ivanVasi4');
	const passUser = prompt('Введите пароль', 'ivanVasi4');
	if (!users.some(item => (item.login === loginUser && item.pass === passUser))) {
		alert('Пользователь не найден. Неверный логин или пароль');
		heading.textContent = 'Аноним';
	} else {
		users.forEach(item => {
			if (item.login === loginUser && item.pass === passUser) {
				heading.textContent = item.firstName;
				return;
			}
		});
	}
};

const addUser = user => {
	users.push(user);
	render();
};

const delUser = key => {
	users.forEach((item, index) => {
		if (item.key === key) users.splice(index, 1);
	});
	render();
};

const regUser = () => {

	const user = {};
	const name = prompt('Введите Имя и Фамилию', 'Иван Васин').split(' ');
	user.firstName = formatName(name[0].toLowerCase());
	user.secondName = name[1] ? formatName(name[1].toLowerCase()) : '';
	user.login = prompt('Введите ваш логин', 'ivanVasi4');
	while (users.some(item => item.login === user.login)) {
		alert('Данный логин уже есть в списке пользователей');
		user.login = prompt('Введите ваш логин', 'ivanVasi4');
	}

	user.pass = prompt('Введите ваш пароль', 'ivanVasi4');
	user.regDate = Date.now();
	user.key = generateKey();

	addUser(user);
};

document.addEventListener('click', event => {

	const target = event.target;

	if (target.matches('#registerUser')) {
		regUser();
	}
	if (target.matches('#login')) {
		authUser();
	}
	if (target.matches('.del-btn')) {
		delUser(target.parentNode.key);
	}
});

render();