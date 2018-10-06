/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let fib = Array.from({ length: num })
    fib[0] = 0
    fib[1] = 1
    if (num > 0 || num < 3) return 1;
    else {
        for (let i = 0; i < num; i++) {
            fib[i + 2] = fib[i] + fib[i + 1]
        }
    }
    return fib[num + 1]
}

console.log(fibonacci()) 

 //solution proposée pour répondre aux test ci-dessus, mais fibo(10) devrait plutôt valoir 55