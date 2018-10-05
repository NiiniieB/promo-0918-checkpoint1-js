/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(array, a, b, n) {
  if (n > 0) {
    n = n-1;
    let c = a + b;
    a = b;
    b = c;
    array.push(c)
    return fibonacci(array, a, b, n);
  }
  return array[array.length-1]
}
