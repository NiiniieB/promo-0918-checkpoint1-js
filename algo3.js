/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let tab=new Array(0,1);
    for (let i=2; i<=num+1; i++) {
        tab[i]=tab[i-1]+tab[i-2];
    }
   return tab[num+1];
  }
  
  let ret6 = fibonacci(6);
  let ret10 = fibonacci(10);
  
  console.log("La 6ème valeur de la suite de Fibonacci est : " + ret6);
  console.log("La 10ème valeur de la suite de Fibonacci est : " + ret10);