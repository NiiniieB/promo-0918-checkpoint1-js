/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fib= (n) => {
  const res = [0,1]
  for (let i = 1; i <= n; i++) {
    res.push(res[i-1]+res[i]);
  }
  return res[n+1];
}

console.log(fib(10));

    
