describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    const numbers = [1,2,3];
    const odd = numbers.filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("should use 'map' to transform each element", function () {
    const numbers = [1, 2, 3];

    // We introduce arrow function syntax here. 
    // Notice some syntactical benefits:
    // - Single line functions have an implicit return statement
    // - Parens are optional around functions with 1 argument
    // - Curly braces not needed for single-line functions

    // Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    const numbersPlus1 = numbers.map(x => x + 1);
    // const numbersPlus1 = numbers.map(function((x) { return x + 1 }); 

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    const numbers = [1, 2, 3];
    const reduction = numbers.reduce((memo, current) =>  memo + x, 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'forEach' for simple iteration", function () {
    const numbers = [1,2,3];
    const msg = "";
    const isEven = (item) => {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'every' to test whether all items pass condition", function () {
    const onlyEven = [2,4,6];
    const mixedBag = [2,4,5,6];

    const isEven = (x) => x % 2 === 0;

    expect(onlyEven.every(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.evert(isEven)).toBe(FILL_ME_IN);
  });

  it("should use 'some' to test if any items passes condition" , function () {
    const onlyEven = [2,4,6];
    const mixedBag = [2,4,5,6];

    const isEven = (x) => x % 2 === 0;

    expect(onlyEven.some(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.some(isEven)).toBe(FILL_ME_IN);
  });
  
  it("should use flatten to make nested arrays easy to work with", function() {
      expect([[1, 2], [3, 4] ].flat()).toEqual(FILL_ME_IN);
  });

  it("should use chained values for multiple higher order functions", function() {
      const result = [[0, 1], 2 ]
                       .flatten()
                       .map((x) => x + 1)
                       .reduce((sum, x) => sum + x)

      expect(result).toEqual(FILL_ME_IN);
  });

});

