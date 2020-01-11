'use strict'

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 }; 
 
let users = [ vasya, petya, masha ]; 

function getUsersName(arr) {

	let newarray = [];

	for (let item of arr) {
		
		newarray.push(item.name);
		
	};

	return newarray;
};

alert(getUsersName(users));