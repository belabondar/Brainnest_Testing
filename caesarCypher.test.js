let { caesarCipher } = require("./script");

it("should cypher letters correctly", function () {
  expect(caesarCipher("a", 5)).toBe("f");
  expect(caesarCipher("z", 1)).toBe("a");
});

it("should keep capitalization", function () {
  expect(caesarCipher("A", 0)).toBe("A");
  expect(caesarCipher("A", 5)).toBe("F");
  expect(caesarCipher("A", -1)).toBe("Z");
});

it("should work in reverse", function () {
  expect(caesarCipher("a", -1)).toBe("z");
});

it("should wrap shift around alphabet", function () {
  expect(caesarCipher("a", 52)).toBe("a");
  expect(caesarCipher("a", -52)).toBe("a");
  expect(caesarCipher("A", -28)).toBe("Y");
});

it("should not shift none letters", function () {
  expect(caesarCipher("#", 10)).toBe("#");
  expect(caesarCipher(".", 10)).toBe(".");
  expect(caesarCipher(" ", 10)).toBe(" ");
});
