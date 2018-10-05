/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
 function fibonacci(num){
    let a = 1;
    let b = 0;
    let x = 0
  
    for(let i = num; i >= 0; i--){ 
      x = a;
      a = a + b;
      b = x;
    }
  
    return b;
}