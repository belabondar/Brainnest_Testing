let { capitalize } = require("./script");

//capitalize
it("should capitalize the first letter", function () {
  let str = "hello";
  expect(capitalize(str)).toBe("Hello");
});

it("should return undefined if passed value is not a string", function () {
  let number = 1;
  let boolean = true;
  let empty;
  let bad = null;

  expect(capitalize(number)).toBe(undefined);
  expect(capitalize(boolean)).toBe(undefined);
  expect(capitalize(empty)).toBe(undefined);
  expect(capitalize(bad)).toBe(undefined);
});

it("should return a unaltered string if the first character cannot be capitalized or is already capitalized", function () {
  expect(capitalize("Hello")).toBe("Hello");
  expect(capitalize("9 this cant be")).toBe("9 this cant be");
  expect(capitalize("#")).toBe("#");
});

it("should work with a empty string", function () {
  expect(capitalize("")).toBe("");
});
