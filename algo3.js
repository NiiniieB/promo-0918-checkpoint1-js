/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let resultNb =[];
    resultNb.push(0,1);
    if (num >= 2){
        for (let i = 2;i <= num+2; i++){
            resultNb[i] =  resultNb[i-1] + resultNb[i-2]
        }
            return resultNb[num+1];
    } 
        return resultNb[num];
    
}