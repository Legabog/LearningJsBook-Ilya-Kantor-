'use strict'

let date = new Date(2019, 10, 23);

function getLocalDay(date) {

	switch (date.getDay()) {
		case 0: alert('ВС');
		break;
		case 1: alert('ПН');
		break;
		case 2: alert('ВТ');
		break;
		case 3: alert('СР');
		break;
		case 4: alert('ЧТ');
		break;
		case 5: alert('ПТ');
		break;
		case 6: alert('СБ');
		break;
	}

};

getLocalDay(date);