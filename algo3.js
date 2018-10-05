/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num){
  let num1 = 1;
  let num2 = 0;
  let valTemp = 0;

  while (num >= 0){
    valTemp = num1;
    num1 = num1 + num2;
    num2 = valTemp;
    num -= 1;
  }

  return num2;
}

console.log(fibonacci(1000));

