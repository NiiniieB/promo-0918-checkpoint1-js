/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {   
    let arr = [0, 1];
    for (let i = 2; i < num + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[num]
}

// Ex: fibo(6) *7* in JS  // return 13;
console.log(fibonacci(7))

// Ex: fibo(10) *11* in JS // return 89;
console.log(fibonacci(11))