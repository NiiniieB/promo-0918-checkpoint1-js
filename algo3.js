/*
 * Given a number N return the index value of the Fibonacci sequence.
 * Ex: fibo(6)  // return 13;
 * Ex: fibo(10) // return 89;
 */

function fibonacci(num) {
let nb1 = 1;
let nb2 = 0;
let temp;
    while (num >= 0) {
        temp = nb1;
        nb1 = nb1 + nb2;
        nb2 = temp;
        num -= 1;
    }
    return nb2;
}
fibonacci(6);