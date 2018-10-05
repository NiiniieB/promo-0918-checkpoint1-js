/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    // Formule Fn = ( 1 / Math.sqrt(5) ) * ( Math.pow( (1 + Math.sqrt(5) ) / 2, n + 1 ) - Math.pow( (1 - Math.sqrt(5) ) / 2, num + 1) )
    return ( 1 / Math.sqrt(5) ) * ( Math.pow( (1 + Math.sqrt(5) ) / 2, num + 1 ) - Math.pow( (1 - Math.sqrt(5) ) / 2, num + 1) );
}

console.log(
    fibonacci(6),
    fibonacci(10)
    )