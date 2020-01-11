'use strict'

let login = prompt('Введите ваш логин', '');

if (login =='Админ'){
	let password = prompt('Введите ваш пароль','');
	if (password == 'Я главный'){
		alert('Здравствуйте');
	}else if (password == null || password == ''){
		alert('Отменено');
	}else{
		alert('Неверный пароль');
	}
}else if (login == null || login == ''){
	alert('Отменено');
}else{
	alert('Мы вас не знаем');
}