/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fibonacci = (num) => {

  if(num < 0){
    console.log("Error : index must be greater than zero !");
  }

else{

  let array = [1, 1];

  for (let i = 2; i < num + 1; i++){
    let nextNb = array[i - 1] + array[i - 2];
    array.push(nextNb);
  }
  return array.pop()
  }
}

fibonacci(10);
