/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
	
	let a=[];
	a[0]=0;
	let b=[];
	b[0]=1;
  
	for (let i=1; i<num; i++)
	{
		a[i]=b[i-1]
		b[i]=a[i-1]+b[i-1]
	}


	return a[num-1]+b[num-1];
}

console.log(fibonacci(6));