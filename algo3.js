/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
	let suiteNum = [1, 2];
	if(num == 1) {return suiteNum[0]}
	else if (num == 2) {return suiteNum[1]}
	else {
	  	for (let i=2; i < num; i ++){
	  	suiteNum.push(suiteNum[i-2] + suiteNum[i-1]);
	  	}
	  
	}
	return suiteNum[num-1];
}

console.log(fibonacci(6));
console.log(fibonacci(10));