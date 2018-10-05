/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let sequenceFibonacci = [0, 1];

  for (let i = 2; i < num + 1; i++) {
    sequenceFibonacci.push(sequenceFibonacci[i - 1] + sequenceFibonacci[i - 2]);
  }
  return sequenceFibonacci[num];
}
