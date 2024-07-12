function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function sum(a, b) {
  return a + b
}

function reverseString(string) {
  return string.split("").reverse().join("")
}

const calculator = {
  add: function (a, b) {
    return a + b
  },
  subtract: function (a, b) {
    return a - b
  },
  divide: function (a, b) {
    return a / b
  },
  multiply: function (a, b) {
    return a * b
  },
}

function caesarCipher(string, key) {
  let result = ""
  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    let charCode = char.charCodeAt(0)
    let shift = key % 26
    let newCharCode = charCode + shift

    if (isLowerCase(char) || isUpperCase(char)) {
      if (newCharCode > 122) {
        newCharCode -= 26
      }
      result += String.fromCharCode(newCharCode)
    } else {
      result += char
    }
  }
  return result
}

function isLowerCase(letter) {
  if (typeof letter !== "string" || letter.length !== 1) {
    return false
  }
  let char = letter.charCodeAt(0)
  return char >= 97 && char <= 122
}
function isUpperCase(letter) {
  if (typeof letter !== "string" || letter.length !== 1) {
    return false
  }
  let char = letter.charCodeAt(0)
  return char >= 65 && char <= 90
}

function analyzeArray(arr) {
  let sum = 0
  let min = Infinity
  let max = -Infinity
  let average = 0
  let length = arr.length

  for (let i = 0; i < length; i++) {
    let element = arr[i]
    sum += element
    if (element < min) {
      min = element
    }
    if (element > max) {
      max = element
    }
  }
  average = sum / length
  return {
    average,
    min,
    max,
    length,
  }
}

module.exports = {
  capitalize,
  calculator,
  caesarCipher,
  reverseString,
  sum,
  analyzeArray,
}
