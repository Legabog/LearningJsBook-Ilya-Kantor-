'use strict'

let arr = ["HTML","JavaScript","CSS"];

function copySorted(arr) {

	let sorted = arr.concat().sort();

	return sorted;
};


alert(copySorted(arr));

alert(arr);