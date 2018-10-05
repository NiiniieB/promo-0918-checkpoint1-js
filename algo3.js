/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num){
	let resultFibo = 0;
	if (num < 2){
	 return num	
	}else{
		resultFibo = fibonacci(n-2) + fibonacci(n-1);
	 return resultFibo;
	}

}

console.log(fibonacci(12));