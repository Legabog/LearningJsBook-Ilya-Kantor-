'use strict'

let array = [1, 2, 3];

function shuffle(array) {

	array = array.sort(() => Math.random() - 0.5) ;
};

shuffle(array);

console.log(array);