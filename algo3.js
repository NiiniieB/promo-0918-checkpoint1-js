/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let tab = [0, 1];
    for (let i = 2; i <= num + 1; i++) {
        tab.push(tab[i - 2] + tab[i - 1]);
    }
    return tab[num];
}