/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let myArray = [0, 1];
  for (i=2; i<=num+2; i++){
      myArray.push();
      myArray[i] = myArray[i-1] + myArray[i-2];
  }
  return myArray[num+1];
}

//Exemple
console.log(fibonacci(6));