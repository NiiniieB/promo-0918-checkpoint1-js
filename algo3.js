/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
// Aglorithme Exemple

//EXEMPLE
// addFibo(200,10)
// [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
// 89

function addFibo (num,x) {
    const arrFib = [1]
    for (let i = 1; i <= num;) {
      arrFib.push(i)
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2]
    }
    console.log(arrFib)
    const result = arrFib
      .filter(num => num % 2 !== 0)
      .reduce((a, b) => a + b)
    let resultFibo=[];
    resultFibo.push(result)
    console.log(arrFib[x]);
  }

  addFibo(200,6)

