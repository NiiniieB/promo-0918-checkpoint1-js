/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    
    let tab = [0,1]

    for (let i = 1; i < num +1; i++) {
        tab.push(tab[i-1] + tab[i])
        
    }
    return tab [num +1]
}
console.log(fibonacci(13))