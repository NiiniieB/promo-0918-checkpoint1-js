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


//créé une fonction "fibonacci" qui prend 1 nb  "num" pour parametre
//créé une constante tableau "suite" qui a pour valeurs 1 et 1
// repète tant que la valeur est inf à 1000 :
//      - calcule la valeur suivante du tableau en additionnant la valeur actuelle à la valeur précédente,
//      - puis envoie cette valeur à la fin du tableau
// créé une variable " nbToFind" qui définit l'index du tableau en fonction du nb "num" donné
// retourne la valeur du tableau "suite" correspondant à l'index "num"