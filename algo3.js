/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) // Déclaration de la fonction fibonacci avec un parametre num en entrée
{
    let res = 0; // Déclaration de la variable de retour
    let tableauValeurs = [0,1]; // Démarrage du tableau (0 et 1 (selon la suite de Fibonacci))
    let i; // Variable de la boucle, à conserver après la portée de la boucle

    for (i=1 ; i < num ; i++) // Boucle en fonction du paramètre num
        tableauValeurs.push(tableauValeurs[i] + tableauValeurs[i-1]); // Ajout de la somme de la valeur actuel et celle précédente

    res = tableauValeurs[i] + tableauValeurs[i-1]; // Calcul final

    return res; // Retour du résultat
}

console.log(fibonacci(6)); // Test donnée en exemple
console.log(fibonacci(10)); // Test donnée en exemple
console.log(fibonacci(11)); // = fibonacci(9) + fibonacci(10)
console.log(fibonacci(9) + fibonacci(10)); // = fibonacci(11)