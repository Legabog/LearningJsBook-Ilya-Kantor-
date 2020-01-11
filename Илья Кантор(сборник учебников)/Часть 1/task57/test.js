'use strict'

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function topSalaries(salaries) {

	let maxvalue = 0;
	let maxName = null;

	for (let [key, value] of Object.entries(salaries)) {
		if (maxvalue < value) {
			maxvalue = value;
			maxName = key;
		}; 
	};
    	

	return maxName;


};


alert(topSalaries(salaries))