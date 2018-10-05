/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(N) {
    let result = [1, 1];
    for (let i = 2; i < N + 1; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[N];
}