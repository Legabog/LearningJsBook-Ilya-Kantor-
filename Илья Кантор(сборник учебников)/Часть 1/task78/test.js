'use strict'

function makeCounter() {
	
	counter.count = 0;

	function counter() {
		return counter.count++;
	};

	counter.set = value => counter.count = value;

	counter.decrease = () => counter.count--;

	return counter;
};

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter.set(5));
console.log(counter.decrease());