/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  const arr = [0, 1];

  for(let i = 1; i <= num; i++){
    arr.push(arr[i] + arr[i-1]);  
  }
  return arr[num+1];
}