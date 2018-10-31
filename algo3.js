/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/
let i = 0;
let numF= 0;
let numPre= 0;
let numDeu= 0
function fibonacci(num) {
  if(num ===0){
      return 0;
  }  
  if(i === num)
  {
      return numF;
  }
  if(i === 0){
    numPre = 1
  }
  if(i < num){
      numF = numPre + numDeu;
      numDeu = numPre;
      numPre = numF;
      i++;
      fibonacci(num);
  }
}