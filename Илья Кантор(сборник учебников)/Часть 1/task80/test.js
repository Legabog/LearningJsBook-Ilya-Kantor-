// 'use strict'

'use strict'

/*function printNumber(from, to) {

	let result = [];

	setInterval(function () {
		for(let i = from; i<to; i++) {
			alert(i);
		};
	}, 1000);
}

printNumber(2, 10);*/


function printNumber(from, to) {

	setTimeout(function numberRun() {

		for(let i = from; i<to; i++ ) {
			alert(i);
		};

		setTimeout(numberRun, 1000);
	}, 1000);
}

printNumber(1, 15);