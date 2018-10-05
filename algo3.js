/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let nb = 0;
    let nbAv = 1;
    let nbAvAv = 0;
    for (let i = 0; i < num; i++) {
        nb = nbAv + nbAvAv;
        nbAvAv = nbAv;
        nbAv = nb;        
    }
    return (nb)
}
fibonacci(10)