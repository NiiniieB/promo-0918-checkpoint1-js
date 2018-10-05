/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
function fibonacci(num) {
    let result = 0
    x = 0
    y = 1
    for (i = 0; i < num; i++) {
        result = x + y
        x = y
        y = result
    }
return result
}

let index = 6
console.log(`Index: ${index} - fibonacci: ${fibonacci(index)}`)
index = 10
console.log(`Index: ${index} - fibonacci: ${fibonacci(index)}`)