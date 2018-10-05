/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/



function fibonacci(num) {

    let firstNum = 1,
        secondNum = 1,
        next = 1;

    for (let i = 2; i <= num; i++) {
        next = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = next;
    }
    return next;
};
console.log(fibonacci(6));