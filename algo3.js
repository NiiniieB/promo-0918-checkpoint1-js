/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let a = 0;
  let b = 1;
  let temp = 0;

  for(i=0; i<num; i++) {
    temp = b;
    b = b + a;
    a = temp;
  }
  return b;
}
let test = fibonacci(10)
console.log(test)