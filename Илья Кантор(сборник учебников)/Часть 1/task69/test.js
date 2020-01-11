// 'use strict'
// 1.

/*function sumTo(n) {

	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
	};

	return sum;
};*/
// 2.

function sumTo(n) {

	if (n == 1) {
		return 1;
	} else {
		return (n + sumTo(n - 1));
	};
};
// 3.

/*function sumTo(n) {

	return (((2 * 1 + 1*(n - 1))/2)* n); 

}
*/
alert(sumTo(4));


