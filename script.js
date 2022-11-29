function capitalize(str) {
  if (isString(str)) return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (isString(str)) return [...str].reverse().join("");
}

function isString(str) {
  return typeof str === "string";
}

class Calculator {
  constructor() {}

  add(a, b) {
    if (this.validateInputs([a, b])) return a + b;
  }

  subtract(a, b) {
    if (this.validateInputs([a, b])) return a - b;
  }

  divide(a, b) {
    if (a === 0 || b === 0) return undefined;
    if (this.validateInputs([a, b])) return a / b;
  }

  multiply(a, b) {
    if (this.validateInputs([a, b])) return a * b;
  }

  validateInputs(numbers) {
    for (let number of numbers) {
      if (!this.isNumber(number)) return false;
    }
    return true;
  }

  isNumber(a) {
    return typeof a === "number";
  }
}

function caesarCipher(string, shift) {
  let lettersRegex = /[a-zA-Z]/;
  let cypher = buildCypher(shift);
  let out = "";
  for (let i = 0; i < string.length; i++) {
    if (lettersRegex.test(string[i])) {
      if (isUpperCase(string[i])) {
        out += cypher[string[i].toLowerCase()].toUpperCase();
      } else {
        out += cypher[string[i]];
      }
    } else {
      out += string[i];
    }
  }
  return out;
}

function buildCypher(shift) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  if (shift < 0) shift = letters.length + (shift % letters.length);
  let cypher = {};

  for (let i = 0; i < letters.length; i++) {
    cypher[letters[i]] = letters[(i + shift) % letters.length];
  }

  return cypher;
}

function isUpperCase(string) {
  return string === string.toUpperCase();
}

function analyzeArray(numbers) {
  let out = {
    average: undefined,
    min: undefined,
    max: undefined,
    length: numbers.length,
  };
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    //on first item
    if (i === 0) {
      out.min = num;
      out.max = num;
    }

    if (num > out.max) out.max = num;
    if (num < out.min) out.min = num;

    total += num;
  }

  out.average = total / out.length;

  return out;
}

module.exports = {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
};

// 1 2 3 4 5
