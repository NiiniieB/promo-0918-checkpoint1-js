/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let a = 0
    let b = 1
    let c = 1
    for(let i = 0; i <= num; i++){
        if(i > 0){
          c = a+b
          a = b
          b = c
        }
    }
  return c
}




