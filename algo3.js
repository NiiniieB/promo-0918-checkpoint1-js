/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  const arrFibo = [0,1]
  for (let i = 1; i < num+1; i++) {
    arrFibo.push(arrFibo[i-1]+arrFibo[i]);
  }
  return arrFibo[num+1];
}

// Number to test
const number = 10;
console.log(fibonacci(number));
