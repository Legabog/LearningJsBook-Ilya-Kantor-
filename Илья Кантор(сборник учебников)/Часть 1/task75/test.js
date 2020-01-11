'use strict'

let arr = [1, 2, 3, 4, 5, 6, 7];

/*function inBetween(a, b) {

  let newArr = arr.slice((a - 1), (b));

  return newArr;

}

function inArray (arr1) {

  let finalarray = [];

  for (let i = 0; i<arr.length; i++){
    if (arr.includes(+arr1[i]) == true) {
      finalarray.push(arr[i]);
    };
  };

  return finalarray;
}


alert(inArray([1,2,10]));
*/
// методы для filter
function inBetween (a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

alert(arr.filter(inArray([1, 2, 10])));