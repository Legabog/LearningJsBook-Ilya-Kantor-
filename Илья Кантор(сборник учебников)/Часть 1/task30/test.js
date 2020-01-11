'use strict'

function random(min, max) {

	return Math.trunc(min + Math.random() * max); 
};


while (true) {
	alert(random(1,10));
};