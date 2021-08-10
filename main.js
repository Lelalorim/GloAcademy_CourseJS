// eslint-disable-next-line strict
'use strict';

const paragraph = document.getElementById('paragraph'),
  input = document.getElementById('input');

function debounce(f, t) {
  return function (args) {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
}

const outputText = () => paragraph.textContent = input.value;
const debouncedOutput = debounce(outputText, 300);

input.addEventListener('input', debouncedOutput);