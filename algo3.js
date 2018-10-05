/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let fibo = [0, 1];
    let firstLast, secondLast;

    for(let i = 0; i < num; i++){
        firstLast = fibo.length-1;
        secondLast = fibo.length-2;
        fibo.push(fibo[firstLast]+fibo[secondLast]);
    }
    
    return fibo[fibo.length-1];
}