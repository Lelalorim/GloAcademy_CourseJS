/* eslint-disable strict */
'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import calc from './modules/calc';
import maskPhone from './modules/maskPhone';
import validateInputs from './modules/validateInputs';
import validator from '../plugins/validator/validator.js';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/sliderCarousel';

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

maskPhone('.form-phone');
//validate input
validateInputs();
validator();

//
const carousel = new SliderCarousel({
			main: '.companies-wrapper',
			wrap: '.companies-hor',
      parent: '.companies-hor',
      // next: '#test-right',
      // prev: '#test-left',
      slidesToShow: 4,
      infinity: true,

      responsive: [{
        breakpoint: 1024,
        slideToShow: 3,
      },
      {
        breakpoint: 768,
        slideToShow: 2,
      },
      {
        breakpoint: 576,
        slideToShow: 1
      }
    ],
		});

		carousel.init();