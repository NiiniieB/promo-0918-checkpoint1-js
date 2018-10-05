/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
const assert = require("assert")

const fibonacci = num => num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);


assert.strictEqual(fibonacci(6), 13)
assert.strictEqual(fibonacci(10), 89)