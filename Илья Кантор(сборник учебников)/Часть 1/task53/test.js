'use strict'

let messages = [   { text: "Hello", from: "John" },  
{ text: "How goes?", from: "John" }, 
{ text: "See you soon", from: "Alice" } ];

let map = new WeakMap();

for (let items of messages) {
	map.set(items, new Date());
};

console.log(map);
