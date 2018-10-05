/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fibonacci = num => {
  let a = 1;
  let b = 0;
  let temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
};
console.log(fibonacci(6));
console.log(fibonacci(10));

fibonacci(6);
fibonacci(10);
