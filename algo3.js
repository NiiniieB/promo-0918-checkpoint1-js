/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fibo = (n, x = 0, y = 1) => {
    if (n > 0) {
      n--
     
      return fibo(n, y, x + y)
    }
    console.log(y);
  
  }
  
  fibo(6);