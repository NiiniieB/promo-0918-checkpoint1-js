/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let follow = [1,1];
    let nextFollow =""
    for(i = 0; i < num; i++){
        nextFollow = follow[i+1] + follow[i];
        follow.push(nextFollow)
    }
    return follow[num];
}
fibonacci(10);