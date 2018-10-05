/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    const fiboTab = [1,1];
    if (num > 1) {
        for (let i = 2; i <= num; i++) {
            fiboTab[i] = fiboTab[i-1] + fiboTab[i-2];
        }
    }
    return(fiboTab[num]);
};