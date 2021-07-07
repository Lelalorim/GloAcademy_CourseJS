'use strict';

const colorTitle = document.querySelector('#color'),
  bodyStyle = document.querySelector('body'),
  btnChange = document.querySelector('#change');

function changeStyle() {
  const color = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
  colorTitle.textContent = color;
  btnChange.style.color = color;
  bodyStyle.style.cssText = `background-color: ${color};`;
}

changeStyle();

btnChange.addEventListener('click', changeStyle);