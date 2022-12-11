'use strict';

function getSumOfArray(array) {
  let summary = 0;

  for (let item of array) {
    summary += item;
  }

  return summary;
}

/* function call */
console.log(getSumOfArray([4, 5, 6, 8, 2, 9]));
