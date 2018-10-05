/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
	let un = 1;
	let un1 = 1;
	let tmp = 0;

	if(num == 0 || num == 1){
		fibo = 1
	}else{
		for(let i = 2; i < num+1; i += 1){
			fibo = un + un1;

			tmp = un1;
			un1 = fibo;
			un = tmp;
		}
	}
	return fibo;
}

// ======================TEST=====================

// console.log( fibonacci(0) ) // return 1;
// console.log( fibonacci(1) ) // return 1;
// console.log( fibonacci(6) ) // return 13;
// console.log( fibonacci(10) ) // return 89;