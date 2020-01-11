'use strict'

function pow(x, y){
 /* if (y < 0) return NaN;
  if (Math.round(y) != y) return NaN;
*/
  let result = Math.pow(x, y);
  return result;
}

describe("Возводит x в степень n", function() {
  it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
  });
});