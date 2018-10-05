/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
	let x = 1;
	let y = 0; 
	let z;

  	while (num >= 0){
    		z = x;
    		x = x + y;
    		y = z;
    		num--;
  	}

  	return y;
}

console.log(fibonacci(10));
