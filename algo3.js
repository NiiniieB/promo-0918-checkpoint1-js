/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  const suite = [1, 1];
  for (let i = 1; i <1000 ; i++){
      let valeurSuivante = suite[i] + suite [i-1];
      suite [i+1] = valeurSuivante;
      suite.push(suite[i]);
  }
  let nbToFind = suite [num];
  return suite[num];
}


console.log(fibonacci(6));