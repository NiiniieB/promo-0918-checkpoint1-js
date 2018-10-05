/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) 
{
    let res = 0;
    let tableauValeurs = [0,1];
    let i;

    for (i=1 ; i < num ; i++)
        tableauValeurs.push(tableauValeurs[i] + tableauValeurs[i-1]);

    res = tableauValeurs[i] + tableauValeurs[i-1];

    return res;
}

console.log(fibonacci(6));
console.log(fibonacci(10));
//console.log(fibonacci(20));