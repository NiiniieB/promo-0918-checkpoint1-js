/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 8;
* Ex: fibo(10) // return 55;
*/

function fibonacci(num) {
  let i = 0;
  let j = 1;
  let temp = 1;
  for (let k = 0; k < num; k++) {
    temp = i + j;
    i = j;
    j = temp;
  }
  return i;
  // Then comes the recursive solution found on Medium, but i had to change the (num<=1) by (num<=2) or it was somehow returning the answer of fibonnaci(num+1) because I think it didn't take account of the fibonacci of 0
  //   let factor = num - 1;
  //   if (num <= 2) return 1;

  //   return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(6));

console.log(fibonacci(10));
