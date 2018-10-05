/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let fibo = [1, 2] 
  for (let i = 1 ; i<num ; i++){
    fibo[i+1] = fibo[i]+fibo[i-1]
  }
  return fibo[num-1]
}

fibonacci(6)