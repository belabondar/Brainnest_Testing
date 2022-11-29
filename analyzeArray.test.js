let { analyzeArray } = require("./script");

it("should return object with correct average", function () {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});
it("should return object with correct min", function () {
  expect(analyzeArray([1, 2, 3]).min).toBe(1);
  expect(analyzeArray([-5, -2, -10]).min).toBe(-10);
});
it("should return object with correct max", function () {
  expect(analyzeArray([3, 5, 1]).max).toBe(5);
  expect(analyzeArray([2, 5, 10]).max).toBe(10);
});
it("should return object with correct length", function () {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});
