/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let fibo = 1;
    let a = 0;
    let b = 1;
    for(let i = 0; i < num; i++){
        fibo = a + b;
        a = b;
        b = fibo;
    }
    console.log(fibo);
}

fibonacci(10);