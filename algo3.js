/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

const fibonacci = (num) => {
   let list = [0,1]
   let res = 0
    for (i=1; i <=num; i++){
       
        res = (i + 1) + i
        list.push(res)      
    }
  return list[num+1]
}
console.log(fibonacci(6));