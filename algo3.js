/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibo(num) {
    const fib = [1,1]
    for (let i = 2; i <= num; i++){
        fib.push(fib[i-1]+fib[i-2])
    }
   return fib[num]
}


const fiboR = (n, x = 0, y = 1) => {
    if (n > 0) {
      n--  
      return fiboR(n, y, x + y)
    }
  }
