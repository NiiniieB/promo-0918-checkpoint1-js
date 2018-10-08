/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
let fibon = [1, 1]
let i = 0;
while(i <3000) {
    fibon.push(fibon[i] + fibon[i+1]);
    i++;
}
  return fibon[num]
}

console.log(fibonacci(300));