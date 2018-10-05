/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num){
    let arr = [1, 1];
    for (let i = 2; i < num + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[num]
  }

console.log(fibonacci());