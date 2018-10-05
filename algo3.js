/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

// Find the index of a number in an array of Fibonacci numbers.
// Return error if number is not a Fibonacci number.

function fibonacci(num) {
  let i,
    poulet = [];

  poulet[0] = 0;
  poulet[1] = 1;

  num = parseInt(num, 10);

  if (isNaN(num)) {
    throw new Error(
      "Unfortunately, this is not an integer number. Please input an integer number."
    );
  }

  for (i = 2; i <= num; i += 1) {
    poulet[i] = poulet[i - 2] + poulet[i - 1];
    if (poulet.indexOf(num) !== -1) {
      return poulet.indexOf(num);
    } else if (poulet[i] > num) {
      throw new Error(
        "Unfortunately, this is not a number in the Fibonacci sequence, please try again"
      );
    }
  }
}

console.log(fibonacci(21));
