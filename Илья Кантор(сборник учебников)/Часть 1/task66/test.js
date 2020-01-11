'use strict'

function formatDate(date) {



	let nowdate = new Date();
	let nowdatesec = nowdate.getTime() / 1000 - date.getTime() / 1000;

	// date = date.parse()

	if ( nowdatesec < 1 ) {

		alert('прямо сейчас');


	} else if ( nowdatesec < 1*60) {

		alert(`${nowdatesec} секунд назад`);

	} else if ( nowdatesec < 1*60*60) {

		alert(`${nowdatesec/60} мин назад`);

	} else {

		
	};


}


alert( formatDate(new Date(new Date - 1)) ); 
alert( formatDate(new Date(new Date - 30 * 1000)) ); 
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
alert( formatDate(new Date(new Date - 86400 * 1000)) );


