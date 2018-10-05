/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fibonacci = num => {
  const fibLength = 50;
  const fibbage = new Array(fibLength);
  fibbage[0] = 1;
  fibbage[1] = 1;
  for (let i = 2; i < fibLength; i++) {
    fibbage[i] = fibbage[i - 1] + fibbage[i - 2];
  }
  return fibbage[num];
};