/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let first = 0;
    let second = 1;
    let resultMax = 0;
    
    for (let i = 0 ; i < num ; i++) {
        let third = first + second;
        let result = third;
        if (result > resultMax) {
            first = second;
            second = third;
            resultMax = result;
        } 
    }
    console.log(resultMax)
}

fibonacci(6)
fibonacci(10)