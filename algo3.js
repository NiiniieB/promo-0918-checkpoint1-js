/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
const input = 6
let result = 1;
function fibonacci(num) {

  for(let i=0; i<=num;i++){
    result+=i;
  }
  return result;
}

fibonacci(input);
console.log(result);
// FAAUUUUUUXXX MAUUVVAAIIISS BOOOUUHHHHHH
