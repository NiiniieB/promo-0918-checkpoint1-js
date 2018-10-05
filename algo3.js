/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    let fiboChar1 = 0;
    let fiboChar2 = 1;
    for (let i = 2; i <= num; i++) {
        fiboChar = fiboChar2 + fiboChar1;
        fiboChar1 = fiboChar2;
        fiboChar2 = fiboChar;
    }
    return fiboChar;
}