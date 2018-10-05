/*
* Given a number N return the i value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

indice = (numero) => {
    let depart = [0,1];
    for (let i = 0; i < numero; i++) {
        depart.push(depart[0]+depart[1]);
        depart.shift();   
    }
    console.log(depart[1]);
    
};

indice(6);
