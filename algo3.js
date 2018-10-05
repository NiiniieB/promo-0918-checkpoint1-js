/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/


    const fibo = (n) => {
           const res = [1,1]
           for (let i = 1; i < n; i++) {
             res.push(res[i-1]+res[i]);
           }
           return res[n];
         }
console.log(fibo(6));