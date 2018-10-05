/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    if (num <= 1){
      return 1
    }
  
    return (fibonacci(num - 1) + fibonacci(num - 2));
  }

console.log(fibonacci(10));