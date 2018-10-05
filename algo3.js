/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let varTemp= 0;
    let var1 = 1;
    let var2 = 1;
  for(let i = 1; i<num; i++){
    varTemp = var1 + var2;
    var1 = var2;
    var2 = varTemp;
  }
  console.log(varTemp)
}


fibonacci(6);