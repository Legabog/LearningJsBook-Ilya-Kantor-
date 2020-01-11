'use strict'

function pow(x, y){
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
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  describe("возводит x в степень 2", function() {

    function makeTest2(x) {
      let expected = x * x;
      it(`${x} в степени 2 будет ${expected}`, function() {
        assert.equal(pow(x, 2), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest2(x);
    }

  });

  // ... другие тесты. Можно писать и describe, и it блоки.
});