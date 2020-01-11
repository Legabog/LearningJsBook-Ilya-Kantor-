'use strict'

function Calculator() {

	this.read = function() {
		this.a = prompt('Введите первое значение', '');;
		this.b = prompt('Введите второе значение', '');;
	};

	this.sum = function() {
		return (+this.a) + (+this.b);
	};

	this.mul = function() {
		return this.a *this.b;
	};

}


let calculator = new Calculator();
calculator.read()

alert('Это сумма - ' + calculator.sum());
alert('Это произведение - ' + calculator.mul());
