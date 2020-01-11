'use strict'

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
	for (let i in obj){
		if (typeof obj[i] == "number") {
			obj[i] *= 2;
		};
	};
};

multiplyNumeric(menu);

console.log(menu.width,menu.height,menu.title);