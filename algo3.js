/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    //call a recursive function initialized with the 2 first numbers of the Fibonacci sequence (1, 1) and the index of the value to get
    return rFibo(1, 1, num);
}

const rFibo = (iA, iB, iN) => {
    if (iN > 1) {
        /*At each run :
            iA -> iB, 
            iB -> iA + iB,
            iN -> iN - 1
        */
        return rFibo(iB, iA+iB, iN-1);
    }
    //if N > 1 then return the value of iB
    return iB;
}

console.log(fibonacci(6));
console.log(fibonacci(10));