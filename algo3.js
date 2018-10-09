/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let fibo = [];
  fibo[0] = 1;
  fibo[1] = 1;

  for (let i = 2; i <= num; ++i) {
    fibo[i] = fibo[i-1] + fibo [i-2];
  }
  return fibo[num];
}

console.log(fibonacci(6));


/* fonction récursive */

function fibonacciRecurcive(num) {
    if (num == 0) {
        return 1;
    }else if (num == 1) {
        return 1;
    }else {
        return fibonacciRecurcive(num-1) + fibonacciRecurcive(num-2);
    }
}

console.log(fibonacciRecurcive(6));