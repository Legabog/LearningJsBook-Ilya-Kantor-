'use strict'

function truncate(str, maxlength) {
	let x ='';
	str = prompt('Введите строку','');
	maxlength = +prompt('Введите максимальное кол-во символов', '');


	if (str.length > maxlength) {
		x = str.slice(0,maxlength) + '...';
		
	}else{
		x = str.slice(0,maxlength);
	};

	return x;
};

alert(truncate());


/*function truncate(str, maxlength) {   return (str.length > maxlength) ?     str.slice(0, maxlength - 1) + '…' : str; }*/