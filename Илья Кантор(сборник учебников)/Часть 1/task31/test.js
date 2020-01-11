'use strict'

function ucFirst(str) {
	str = prompt('Введите строку', '');
	let str_1 = '';
	str_1 = str[0].toUpperCase();
	for (let k=1;k<str.length;k++) {
		str_1 +=str[k];
	};
	return str_1;
};

alert('Вот вам строка, где первый символ в верхнем регистре : ' + ucFirst());


//либо использовать .slice()
/*function ucFirst(str) {   if (!str) return str; 
 
  return str[0].toUpperCase() + str.slice(1); } 
 
alert( ucFirst("вася") )*/