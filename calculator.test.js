let { Calculator } = require("./script");

let calc = new Calculator();

//add

it("add should be correct", function () {
  expect(calc.add(1, 2)).toBe(3);
  expect(calc.add(5, 4)).toBe(calc.add(4, 5));
});

it("add should work with negative numbers", function () {
  expect(calc.add(5, -5)).toBe(0);
  expect(calc.add(-10, 3)).toBe(-7);
  expect(calc.add(-10, -10)).toBe(-20);
});

//subtract

it("sub should be correct", function () {
  expect(calc.subtract(10, 5)).toBe(5);
  expect(calc.subtract(5, 2)).not.toBe(calc.subtract(2, 5));
});

it("sub should work with negative numbers", function () {
  expect(calc.subtract(5, -5)).toBe(10);
  expect(calc.subtract(-5, 5)).toBe(-10);
  expect(calc.subtract(-5, -5)).toBe(0);
});

//divide

it("div should be correct", function () {
  expect(calc.divide(10, 2)).toBe(5);
  expect(calc.divide(5, 4)).not.toBe(calc.divide(4, 5));
});

it("div should return undefined if either value is zero", function () {
  expect(calc.divide(0, 5)).toBe(undefined);
  expect(calc.divide(5, 0)).toBe(undefined);
});

it("div should work with negative numbers", function () {
  expect(calc.divide(10, -2)).toBe(-5);
  expect(calc.divide(-4, 2)).toBe(-2);
  expect(calc.divide(-20, -10)).toBe(2);
});

//multiply

it("mul should be correct", function () {
  expect(calc.multiply(5, 6)).toBe(30);
  expect(calc.multiply(5, 4)).toBe(calc.multiply(4, 5));
});

it("mul should work with negative numbers", function () {
  expect(calc.multiply(5, -3)).toBe(-15);
  expect(calc.multiply(-10, 2)).toBe(-20);
  expect(calc.multiply(-10, -5)).toBe(50);
});
