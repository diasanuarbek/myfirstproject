'use strict';

function getSumOfArray(array) {
  let summary = 0;

  for (let item of array) {
    summary += item;
    console.log(summary);
  }

  return summary;
}

/* function call */
getSumOfArray([4, 5, 6, 8, 2, 4]);
