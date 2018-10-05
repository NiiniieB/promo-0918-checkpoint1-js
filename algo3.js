/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
   let fib = [1, 1]
   let actual = 0

   for(let i = 0 ; i < num ; i++){
      actual = fib[i] + fib[i+1]
      fib.push(actual)

   }
   return fib[fib.length-2];
}
