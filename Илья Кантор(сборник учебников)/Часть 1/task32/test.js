'use strict'

function checkSpam(str) {
	str = str.toUpperCase();
	if (str.includes('VIAGRA') || str.includes('XXX')) {
		return true;
	}else{
		return false;
	};
};

alert(checkSpam(prompt('Введите строку'),''));