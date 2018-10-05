/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let fiboNum = 0
    let fiboArr = [1]
    for(let i = 0 ; i <= num; i++) {
        if (i===0) {
            fiboNum += 1;
        } else {
            fiboNum += fiboArr[i-1];
        }
        fiboArr.push(fiboNum)
    }
    return fiboArr[num];
}