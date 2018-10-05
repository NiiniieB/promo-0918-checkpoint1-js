/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
let calculFibo = (cpt, num, val1, val2) => {
    if (cpt < num) {
        cpt++;
        return calculFibo(cpt, num, val2, val1 + val2);
    }
    else
        return val2;
};

function fibonacci(num) {
    return calculFibo(1, num, 1, 1);
};

console.log(fibonacci(6));
console.log(fibonacci(10));