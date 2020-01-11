'use strict'

let array = [5, 3, 8, 1];

function filterRange(arr, a, b) {

	let results = arr.filter( item => ((item >= 1) && (item <= 4))  );

	return results;
};


console.log(filterRange(array, 1, 4));
console.log(array);
