'use strict'

let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {

	let clonedate = new Date();

	clonedate.setTime((date.getTime() - days*24*60*60*1000));

	return clonedate;
};

alert(getDateAgo(date, 365));
alert(date);