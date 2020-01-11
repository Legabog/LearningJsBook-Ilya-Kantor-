'use strict'

let number = 0;

let messages = [   {text: "Hello", from: "John"}, 
{text: "How goes?", from: "John"}, 
{text: "See you soon", from: "Alice"} ];

let cashe = new WeakSet();

for (let items of messages) {
	cashe.add(items);
};

alert(`Прочитано ли сообщение под номером ${number}?`);

(cashe.has(messages[number])) ? messages.shift() : alert('Сообщение не прочитано') ; 