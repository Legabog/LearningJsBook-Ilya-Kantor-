'use strict'

let user = {   name: 'John',   age: 30, mail: 'da@yandex.ru', phone: 89308686620 }; 

function count(obj) {
	return Object.keys(obj).length;
};

alert(count(user));