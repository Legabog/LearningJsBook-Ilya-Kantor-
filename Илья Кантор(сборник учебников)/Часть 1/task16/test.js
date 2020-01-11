'use strict'

function pow(x, y){
  if (y < 0) return NaN;
  if (Math.round(y) != y) return NaN;

  let result = Math.pow(x, y);
  return result;
}

describe("pow", function() {

  describe("возводит x в степень 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
      it("для отрицательных y возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
      });

      it("для дробных y возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });
});