/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let a = 0, b = 1, c = 0;
  for (let i=0; i <= num; i++) {
      c = a + b;
      b = a;
      a = c;
  }
  return a;
}