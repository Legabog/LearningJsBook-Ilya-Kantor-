'use strict'

let calculator = {

	a : 10,
	b : 5,
	c : 1,

	read() {
		let x_1 = prompt('Введите первое значение : ', '');
		let x_2 = prompt('Введите второе значение : ', '');
		this.x1 = x_1;
		this.x2 = x_2;
	},

	sum() {
		let sum = 0;
		for (let key in this) {
			if (typeof(this[key]) === 'number') {
				sum += this[key];

			};
		};

		return sum;
	},

	mul() {

		let x = 1;
		for (let key in this){
			if (typeof(this[key]) === 'number') {
				x *= this[key];
			};
		};

		return x;

	},
};