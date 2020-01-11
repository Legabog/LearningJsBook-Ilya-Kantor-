'use strict'
// my way
function getSecondsToday() {

	let date = new Date();

	return (date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds());

}

alert(getSecondsToday());

// another way
/*function getSecondsToday() { 
  let now = new Date(); 
 
  // создаём объект с текущими днём/месяцем/годом  
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
 
  let diff = now - today; // разница в миллисекундах   
  return Math.round(diff / 1000); // получаем секунды
} 
 
alert( getSecondsToday() );*/