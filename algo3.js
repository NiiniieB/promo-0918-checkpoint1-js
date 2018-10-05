/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {

	let a = 0;
	let b = 1;
	let temp;

	for (let i = 0; i <= num; i++) {
		temp = a + b;
		a = b;
		b = temp;
	}

	return a;
}

console.log( fibonacci(6) );
console.log( fibonacci(10) );