/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  for(var fibArray = [0], i=0,j=1,k=0 ; k < num ; i=j,j=x,k++){
    x=i+j;
    fibArray.push(x);
}
console.log(fibArray[fibArray.length-1]);
}
fibonacci(10)