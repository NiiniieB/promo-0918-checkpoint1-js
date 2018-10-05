/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fibonacci = (param) => {
    const res = [0, 1];
    for (let i = 1; i < param+1; i++) {
      res[i + 1] = res[i] + res[i - 1]
    }
    return res[res.length - 1]
    
  }
  console.log(fibonacci(6))