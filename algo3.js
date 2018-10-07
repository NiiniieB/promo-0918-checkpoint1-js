/*
Je pense qu'il y a une erreur sur les return dans l'énoncé.

* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13; 
* Ex: fibo(10) // return 89;
*/



let num = 6

function fibonacci(num) {
let array = [0, 1];

    for (let i = 2; i < num + 1; i++){
        array.push(array[i - 2] + array[i - 1]);
    }
return array[6];
}
console.log(fibonacci(num)) 

