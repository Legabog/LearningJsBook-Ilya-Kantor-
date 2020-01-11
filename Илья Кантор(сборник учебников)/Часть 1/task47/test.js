'use strict'

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 }; 
 
let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {

	let sum = 0;
	for (let item of arr) {
		sum += item.age

	};
	let result = sum/arr.length;
	return result;
};

alert(getAverageAge(arr));