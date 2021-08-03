/* eslint-disable strict */
'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import calc from './modules/calc';
import validateInputs from './modules/validateInputs';
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
ourTeam();
//validate input
validateInputs();