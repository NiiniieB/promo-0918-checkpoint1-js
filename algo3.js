/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let fiboNum = 0
    let fiboArr = [1]
    for(let i = 1 ; i <= num; i++) {
        if (i!==1) {
            fiboNum += fiboArr[i-1]
        } else {
            fiboNum += 1;
        }
        fiboArr.push(fiboNum)
    }
    return fiboArr[num];
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(5))
console.log(fibonacci(12))