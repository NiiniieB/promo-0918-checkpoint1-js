/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
	let a = 1;
	let b = 0;

  while (num >= 0){
    let tempo = a;
    a = a + b;
    b = tempo;
    num--;
  }

return b;
}

console.log(fibonacci(6))
console.log(fibonacci(10))