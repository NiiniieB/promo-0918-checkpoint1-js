/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
function fibo(n,a = 0,b = 1){
	if (n!=0){
		return fibo(n-1,b,a+b)
    }
    console.log(b)	
}
fibo(6)
fibo(10)