'use strict'

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 }; 
 
let users = [ vasya, petya, masha ]; 

let userMapped = users.map(item => ({fullName : (item.name + ' ' + item.surname),
	 id : item.id}));

alert( userMapped[0].fullName );