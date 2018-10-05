/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
   
    let tab = [];
    for (let i=0;i<num+1;i++) {
      if ((i===0) || (i===1)) {
        tab.push(1);
      } else {
        tab.push(tab[i-2]+tab[i-1]);
      }
    
    }
    return tab[num];
}
