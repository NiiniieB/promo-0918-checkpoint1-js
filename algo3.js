/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(number){
    let a = 1, b = 0, temp;
  
    while (number >= 0){
      temp = a;
      a = a + b;
      b = temp;
      number--;
    }
  
    return b;
  }

  