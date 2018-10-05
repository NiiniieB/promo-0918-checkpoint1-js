/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let fibo = [1, 2];
    let newEntry;
    for (let i = 0; i < 50; i++) {
        newEntry = fibo[i] + fibo[i + 1];
        fibo.push(newEntry);
    }
    return fibo[num - 1]
}