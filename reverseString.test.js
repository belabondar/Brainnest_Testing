let { reverseString } = require("./script");

it("should reverse the passed string correctly", function () {
  let string = "abcde";
  expect(reverseString(string)).toBe("edcba");
});

it("should return undefined if the passed value isnt a string", function () {
  let number = 1;
  let boolean = true;
  let empty;
  let bad = null;

  expect(reverseString(number)).toBe(undefined);
  expect(reverseString(boolean)).toBe(undefined);
  expect(reverseString(empty)).toBe(undefined);
  expect(reverseString(bad)).toBe(undefined);
});

it("should work on a empty string", function () {
  expect(reverseString("")).toBe("");
});
