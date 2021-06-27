'use strict';

const fishText = 'Таким образом постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений. Товарищи! дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Таким образом консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности представляет собой интересный эксперимент проверки форм развития. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий.';

const DomElement = function (selector, height, width, bg, fontSize) {

  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

};

DomElement.prototype.createElem = function () {

  if (this.selector.match(/^\./)) {
    let element = document.createElement('div');
    element.classList.add(this.selector.substring(1));
    element.textContent = prompt('Введите содержимое элемента', fishText);
    document.body.append(element);

  }
  if (this.selector.match(/^\#/)) {
    let element = document.createElement('p');
    element.id = this.selector.substring(1);
    element.textContent = prompt('Введите содержимое элемента', fishText);
    document.body.append(element);

  }

  let elem = document.querySelector(this.selector);

  elem.style.cssText = `
  height: ${this.height};
  width: ${this.width};
  background: ${this.bg};
  font-size: ${this.fontSize};  
  `;

};


const elem1 = new DomElement('#newElement', '50vh', '50vh', 'aquamarine', '25');

elem1.createElem();