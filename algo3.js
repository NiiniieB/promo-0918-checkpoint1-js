/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let result = 0;
  if (num > 1) {
    result += fibonacci(num - 1) + fibonacci(num - 2);
  } else {
    result += 1;
  }
  return result;
}
