/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
function fibonacci(num) {
    const array = [];
    let start = 1;
    let count = 0;

    for (let i = 0; i <= num; i++) {
        let current = count + start;
        array.push(current);
        start = count;
        count = current;
    }

    return array[num];
}