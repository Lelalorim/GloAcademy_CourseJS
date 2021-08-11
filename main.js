/*jshint esversion: 8 */
/* jshint node: true */

const img = document.getElementById('img'),
  btnToggle = document.getElementById('toggle'),
  btnReset = document.getElementById('reset');

let flyInterval;
let count = 0;

const flyAnimate = function() {
  count += 5;
  flyInterval = requestAnimationFrame(flyAnimate);
  if (count < 1200) {
    img.style.left = `${count}px`;
  } else {
    count = 0;
    img.style.left = `${count}px`;
  }
};

let animate = false;
btnToggle.addEventListener('click', () => {
  if(!animate) {
    flyInterval = requestAnimationFrame(flyAnimate);
    animate = true;
  } else {
    cancelAnimationFrame(flyInterval);
    animate = false;
  }
});

btnReset.addEventListener('click', () => {
  img.style.left = 0;
  count = 0;
});