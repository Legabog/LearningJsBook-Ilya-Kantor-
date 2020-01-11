'use strict'

let arr = [];

function sumInput() {	
	let sum = 0;
		
	for(;;) {
		let writevalue = prompt('Введите число','');

		if (parseInt(writevalue).toString() === 'NaN' || writevalue =='' || writevalue =='null') {
			break;
		} else {
			arr.push(+writevalue);
			sum += +writevalue;
		};
	};

	return sum;  
};

alert(sumInput());

alert(arr);



