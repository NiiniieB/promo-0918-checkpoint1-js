/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fibo = (param) => {
  const res = [0, 1];
  for (let indice = 1; indice < param+1; indice++) {
    res[indice + 1] = res[indice] + res[indice - 1]
  }
  return res[res.length - 1]
  
}
console.log(fibo(6))