/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const suiteDeFibonnaci = () => {
    let suiteF = [1,1];
    for (let i=1;i<101;i++) {
        suiteF.push(suiteF[i] + suiteF[i-1]);
    }
    return suiteF;
}

const fibonacci = (num) => suiteDeFibonnaci()[num];

console.log(fibonacci(6));
console.log(fibonacci(10));