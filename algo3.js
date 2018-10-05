/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let fibonnacciTab = [0, 1]
  for (let i = 2 ; i <= num + 1 ; i += 1){
    fibonnacciTab[i] = fibonnacciTab[i - 2] + fibonnacciTab[i - 1]
  }
  return fibonnacciTab[num + 1]
}

console.log(fibonacci(10))