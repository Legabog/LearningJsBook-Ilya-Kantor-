'use strict'

let arr = [1, 1, 1, 1, 1, 2, 2, 3];

function unique(arr) {
	let uniqueSet = new Set();	
	for (let items of arr) {
		uniqueSet.add(items);
	};
	
	return Array.from(uniqueSet);
};
	
 function uniqueV2(arr) {
 	return Array.from(new Set(arr));
};

alert (unique(arr));