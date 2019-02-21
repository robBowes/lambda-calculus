const numbers = require('./numbers');

const { toInt, zero,successor, one, two, three, four, add, multiply, exponent} = numbers;


console.assert(toInt(zero) === 0, "Zero is zero")
console.assert(toInt(successor(zero)) === 1, "The successor of zero is 1")
console.assert(toInt(add(one)(two)) === 3, "One plus two is 3")
console.assert(toInt(multiply(two)(two)) === 4, "Two times two is four")
console.assert(toInt(exponent(two)(two)) === 4, "Two exponent two is four")
console.assert(toInt(exponent(four)(two)) === 16, "Four exponent two is sixteen")