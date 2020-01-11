// 'use strict'
function f(x) {
	alert(x);
}

function delay(f, ms) {

	return function (...args) {

		setTimeout(() => f.apply(this, arguments), ms);
	};
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 5500);

f1000("test2");
f1500("test1");


