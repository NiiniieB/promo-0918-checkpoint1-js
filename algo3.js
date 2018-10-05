/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let fiboSeq = [0,1];
    for (let i = 1; i<=num; i++){
        fiboSeq.push(fiboSeq[i-1] + fiboSeq[i]);
    }
    return fiboSeq[num+1];
}


// Test 

console.log(fibonacci(59));