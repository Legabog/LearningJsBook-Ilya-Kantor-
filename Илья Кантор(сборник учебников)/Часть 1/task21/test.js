'use strict'

let salaries = {
	John : 500,
	Ann : 160,
	Pete : 130
};

function sum(obj){
	
	sum = 0;
	for (let i in obj) {
		sum += obj[i];
	};

	return sum;

};

alert(sum(salaries));