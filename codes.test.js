const {
  capitalize,
  calculator,
  caesarCipher,
  reverseString,
  sum,
  analyzeArray,
} = require("./codes")

test("Make the first character capitalized", () => {
  expect(capitalize("hello")).toMatch("Hello")
})

test("add two numbers", () => {
  expect(sum(2, 2)).toBe(4)
})

test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh")
})

test("calculator object", () => {
  expect(calculator.add(2, 2)).toBe(4)
  expect(calculator.subtract(2, 2)).toBe(0)
  expect(calculator.multiply(2, 2)).toBe(4)
  expect(calculator.divide(2, 2)).toBe(1)
})

test("caesar Cipher text wrap from z to a", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc")
})

test("caesar Cipher test for case preservation", () => {
  expect(caesarCipher("Hello", 3)).toMatch("Khoor")
})

test("caesar Cipher test for punctuations", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!")
})

test("caesar Cipher test to match object", () => {
  let object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(object)
})
