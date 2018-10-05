/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    
    let fiboArray = [1,1];
    for(let i=2; i<=num ;i++){       
        fiboArray[i] = fiboArray[i-1] + fiboArray[i-2];
    }
    return fiboArray[num];

}

console.log(fibonacci(10));