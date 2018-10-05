/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let fibo = [0, 1];
    
    if(n <= 2) return 1;
    
    for(let i = 2; i <= n; i++){
      fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
  }