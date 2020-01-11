// 'use strict'

Function.prototype.defer = function(ms) {
	let f = this;
	return function(...args) {
		setTimeout(() => f.apply(this, args), ms);
	}
};

function f() {
	alert("Hello");
};


f.defer(1000)();
