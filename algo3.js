/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let n0 = 1;
    let n1 = 1;
    let current = 0;

    while (num >= 1) {
        current = n0;
        n0 = n0 + n1;
        n1 = current;
        num--;
    }

    return console.log(n1);
}


fibonacci(6)