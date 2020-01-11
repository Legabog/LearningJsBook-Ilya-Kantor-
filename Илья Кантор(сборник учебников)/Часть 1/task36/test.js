'use strict'

let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {

	let maxSum = 0;
	let iterSum = 0;
	for (let item of arr) {
		iterSum += item;  
		maxSum = Math.max(maxSum, iterSum);

		if(iterSum < 0) {
			iterSum = 0;
		};
	};

 
  return maxSum;
};
alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));