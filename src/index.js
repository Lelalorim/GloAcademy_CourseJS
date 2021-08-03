'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// Timer
countTimer('16 August 2021 07:00');
// Menu
toggleMenu();
// popup
togglePopup();
// Tabs
tabs();
//Slider
slider();
// Calculator
calc(100);
//send-ajax-form
sendForm();
//OurTeam block
const ourTeamBlock = document.getElementById('command');

ourTeamBlock.addEventListener('mouseover', event => {
  if (event.target.matches('img')) {
    [event.target.dataset.img, event.target.src] = [event.target.src, event.target.dataset.img];
  }
});
ourTeamBlock.addEventListener('mouseout', event => {
  if (event.target.matches('img')) {
    [event.target.src, event.target.dataset.img] = [event.target.dataset.img, event.target.src];
  }
});

//validate inputs
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