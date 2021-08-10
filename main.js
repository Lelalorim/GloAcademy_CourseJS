// eslint-disable-next-line strict
'use strict';

const fishText = 'Таким образом постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений. Товарищи! дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Таким образом консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий.';

const DomElement = function (selector = '.newElem', height = '50vh', width = '50vh', bg = '#ef9c9c', fontSize = '20px') {

  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

};

DomElement.prototype.createElem = function () {

  const tagElement = this.selector.match(/^\./) ? 'div' :
    this.selector.match(/^\#/) ? 'p' : '';

  const element = document.createElement(tagElement);

  if (tagElement === 'div') {
    element.classList.add(this.selector.substring(1));
  }

  if (tagElement === 'p') {
    element.id = this.selector.substring(1);
  }

  element.textContent = prompt('Введите содержимое элемента', fishText);

  document.body.append(element);

  element.style.cssText = `
  height: ${this.height};
  width: ${this.width};
  background: ${this.bg};
  font-size: ${this.fontSize};  
  `;

};

const elem1 = new DomElement();

elem1.createElem();

const squareBlock = new DomElement('.square', 100, 100);

squareBlock.createElem();

const square = document.querySelector('.square');

square.textContent = 'Двигаюсь при нажатии на стрелки';

square.style.cssText = `
width: 100px;
height: 100px;
text-align: center;
background: coral;
position: absolute;
left: 150px;
top: 150px;
`;

window.addEventListener('keydown', event => {
  const step = 10;

  if (event.key === 'ArrowLeft') {
    square.style.left = `${parseInt(square.style.left) - step}px`;
  }
  if (event.key === 'ArrowRight') {
    square.style.left = `${parseInt(square.style.left) + step}px`;
  }
  if (event.key === 'ArrowDown') {
    square.style.top = `${parseInt(square.style.top) + step}px`;
  }
  if (event.key === 'ArrowUp') {
    square.style.top = `${parseInt(square.style.top) - step}px`;
  }
});