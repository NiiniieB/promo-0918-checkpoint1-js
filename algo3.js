/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fibonacci = (num) => {
	let fiboSeq = [1,1]
	for(let i = 1; i < num; i++) {
		fiboSeq.push(fiboSeq[i-1] + fiboSeq[i]);
	}
	return fiboSeq[num];
};