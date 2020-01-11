'use strict'

function Calculator() {

	this.methods = {
		"-": (a,b) => a - b,
		"+": (a,b) => a + b
	};

	this.calculate = function(str) {

		let result = 0;

		let splt = str.split(' ');

		let a = +splt[0];
		let b = splt[1];
		let c = +splt[2];

		if (!this.methods[b] || isNaN(a) || isNaN(c)) {
			return NaN;
		};

		return this.methods[b](a, c);
	};

	this.addMethod = function(name, func) {
		this.methods[name] = func;
	};
};


let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a*b);

alert(powerCalc.calculate("5 + 18"));

alert(powerCalc.calculate("2 * 10"));