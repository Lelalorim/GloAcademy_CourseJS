'use strict';

let num = 266219;

function persistence(num) {
  numString = num.toString();
  let sum = 1;
  for (var i = 0; i < numString.length; i++) {
    sum = sum * numString[i];
  }
  console.log(sum);
};