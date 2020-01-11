'use strict'

let salaries = {   "John": 100,   "Pete": 300,   "Mary": 250 }; 

function sumSalaries_v1.2(obj) {
	let sum = 0;

	for (let values of Object.values(obj)) {
		sum += values;
	};

	if (sum === 0) {
		return 0;
    } else {
    	return sum;
    };
};

function sumSalaries_v1.1(salaries) { 
  return Object.values(salaries).reduce((a, b) => a + b, 0) 
};

alert(sumSalaries(salaries));