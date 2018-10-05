/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(param) {
	let x = 1;
	let y = 0; 
	let z=0;

  	while (param>= 0){
    		z = x;
    		x = x + y;
    		y = z;
    		param--;
  	}

  	return y;
}

console.log(fibonacci(6));
  

