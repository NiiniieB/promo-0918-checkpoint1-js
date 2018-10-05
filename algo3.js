/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let fibSequence = [1,1]

  while (fibSequence.length < num+1) {
      fibSequence.push(fibSequence[fibSequence.length-1]+fibSequence[fibSequence.length-2])
  }

  return fibSequence[fibSequence.length-1]
}