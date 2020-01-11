'use strict'
// alert
alert("Вас приветсвует система имя3000");
// prompt
let name = prompt('Введите свое имя', '');
// confirm
let y_n = confirm('Вы точно хотите чтобы я вывел ваше имя?');
if (y_n == true){
	alert(name);
}else{
	alert('ну как знаешь');
};
