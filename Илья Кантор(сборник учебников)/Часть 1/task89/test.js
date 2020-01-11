'use strict'

let dictionary = Object.create(null);

dictionary.apple = "Apple";
dictionary._proto_ = "test";


Object.defineProperty(dictionary,"toString", {
	value: function() {
		return Reflect.ownKeys(this).join();
	},

	enumerable: false
});

for (let key in dictionary) {
	alert(key);
};

alert(dictionary);
