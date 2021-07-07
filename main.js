'use strict';

const colorTitle = document.querySelector('#color'),
  bodyStyle = document.querySelector('body'),
  btnChange = document.querySelector('#change');

function getRandomColor() {
  (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

const randomColor = `#${getRandomColor()}`

function changeStyle(color) {
  colorTitle.textContent = color;
  console.log('randomColor: ', color);
  bodyStyle.style.cssText = `background-color: ${color};`;
  btnChange.style.color = color;
}

//randomColor;

btnChange.addEventListener('click', changeStyle(randomColor))
bodyStyle.style.cssText = `background-color: ${randomColor};`;