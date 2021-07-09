'use strict';

class Todo {
	constructor(form, input, todoList, todoCompleted) {
		this.form = document.querySelector(form);
		this.input = document.querySelector(input);
		this.todoList = document.querySelector(todoList);
		this.todoCompleted = document.querySelector(todoCompleted);
		this.todoData = new Map(JSON.parse(localStorage.getItem('todoList')));
	}

	addToStorage() {
		localStorage.setItem('todoList', JSON.stringify([...this.todoData]))
	}

	render() {
		this.todoList.textContent = '';
		this.todoCompleted.textContent = '';
		this.todoData.forEach(this.createItem, this);
		this.addToStorage();

	}

	createItem(todo) {
		const li = document.createElement('li');
		li.classList.add('todo-item');
		li.key = todo.key;

		li.insertAdjacentHTML('beforeend', `
			<span class="text-todo">${todo.value}</span>
			<div class="todo-buttons">
				<button class="todo-edit"></button>	
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
		`);

		if (todo.completed) {
			this.todoCompleted.append(li);
		} else {
			this.todoList.append(li);
		}

	}

	addTodo(e) {
		e.preventDefault();
		if (this.input.value.trim()) {

			const newTodo = {
				value: this.input.value,
				completed: false,
				key: this.generateKey()
			}
			this.todoData.set(newTodo.key, newTodo);
			this.render();

		}

		if (this.input.value.trim() === '') {
			alert('Нельзя добавлять пустые задачи');
		}
		this.input.value = '';
	}

	generateKey() {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	}

	editItem(itemKey, newValue) {
		this.todoData.forEach(item => {
			if ((item.key) === itemKey) {
				item.value = newValue;
			}
		})
		this.render();
	}

	deleteItem(itemKey) {

		this.todoData.delete(itemKey);
		this.render();
	}

	completedItem(itemKey) {

		this.todoData.forEach(item => {
			if ((item.key) === itemKey) {
				item.completed = !item.completed;
			}
		})
		this.render();
	}

	invisibleItem(target) {
		const item = target.parentNode.parentNode;
		const itemKey = item.key;

		item.style.opacity = 1;
		const invisItem = () => {
			if (item.style.opacity > 0) {
				item.style.opacity -= 0.02;
				requestAnimationFrame(invisItem);

			} else {
				cancelAnimationFrame(invisItem);
				setTimeout(this.deleteItem(itemKey), 1500);
			}
		};
		requestAnimationFrame(invisItem);

	}

	visibleItem(target) {
		const item = target.parentNode.parentNode;
		const itemKey = item.key;

		item.style.opacity = 0;
		const invisItem = () => {
			if (item.style.opacity < 1) {
				item.style.opacity += 0.02;
				requestAnimationFrame(invisItem);

			} else {
				cancelAnimationFrame(invisItem);
			}
		};
		requestAnimationFrame(invisItem);

	}

	handler() {

		document.querySelector('.todo-container').addEventListener('click', event => {
			event.preventDefault();
			const target = event.target,
				itemKey = target.parentNode.parentNode.key;

			if (target.matches('.todo-remove')) {
				this.invisibleItem(target);


			}

			if (target.matches('.todo-complete')) {
				this.completedItem(itemKey);
			}

			if (target.matches('.todo-edit')) {
				let newVal = '';
				do {
					newVal = prompt('Введите новое название задачи', 'Еще одно задание ' + Math.floor(Math.random() * 100));
				}
				while (newVal === null || newVal.length === 0 || newVal.trim() === '');
				this.editItem(itemKey, newVal);
			}

		});
	}

	init() {
		this.form.addEventListener('submit', this.addTodo.bind(this));
		this.render();
		this.handler();
	}
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();