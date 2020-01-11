'use strict'

let array = [5, 3, 8, 1];

function filterRangePlace(arr, a, b) {

	for (let i = 0; i < arr.length; i++ ) {

		let val = arr[i];

		if (val < a || val > b) {
			arr.splice(i, 1);
			i--;
		}
	}

	return arr;

};

console.log(filterRangePlace(array, 1, 4));