// 'use strict'

function debounce(f, ms) {

	let Cooldown = false;  

	return function() {

		if (Cooldown == true) return; 

		f.apply(this, arguments);

		Cooldown = true;

		setTimeout(() => Cooldown = false, ms);

	};


}

let f = debounce(alert, 1000);

f(1);
f(2);


setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);