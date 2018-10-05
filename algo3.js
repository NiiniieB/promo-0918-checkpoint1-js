/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
	let x =[1,2];
	if (x == 1) {return x[0]};
	if (x == 2) {return x[1]};

	if (num>2){
		for (i =2; i< num; i ++ ){
			x[i]= x[i-1]+x[i-2];
		}
	}
	return x[num-1];	
	}
  
console.log(fibonacci(111));