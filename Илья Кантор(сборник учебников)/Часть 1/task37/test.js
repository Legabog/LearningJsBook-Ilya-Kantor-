'use strict'

let camelize = function(str) {

	str = str.split('-');

	str = str.join('');

	return str;
};

console.log(camelize('background-color'));
console.log(camelize("list-style-image") );
console.log(camelize("-webkit-transition"));