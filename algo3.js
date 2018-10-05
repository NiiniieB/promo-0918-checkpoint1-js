/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
let value = 1

let num = 2

function fibonacci(/*num*/) {
  
  for(let x=0; x<num; x++){
    value += value
  }

  return value
}

return fibonacci()

/* hum hum hum */