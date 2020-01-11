'use strict'

let styles = ["Джаз", "Блюз"];

alert(styles);
styles.push("Рок-н-ролл");
alert(styles);

function middleChange(arr) {
	arr[Math.trunc(arr.length/2)] = "Классика"; 	
};

middleChange(styles);
alert(styles);

alert(styles.shift());

alert(styles);

styles.unshift("Рэп", "Рэгги");

alert(styles);
