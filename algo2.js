/* 
* Corriger la fonction minMax()
* La fonction récupère un tableau de nombres positifs, négatifs ou nuls
* Et retourne un tableau à 2 entrées contenant la valeur minimale
* et la valeur maximale du tableau récupéré en entrée
* 
* Exemple 1 :
* Tableau d'entrée : [4, 6, 35, -65, -9, 0, 67]
* Résultat : [-65, 67]
* 
* Exemple 2 :
* Tableau d'entrée : [-30, 5, 43, 108, -5, -7, 89]
* Résultat : [-30, 108]
* 
* Exemple 3 :
* Tableau d'entrée : [56, 7, 63, 9, 7, 12, 85]
* Résultat : [7, 85]
*/

var minMax = (array) => { // Déclaration de la fonction minMax en notation es6

  let min = array[0]; // Initialisation de min et max à la premiere valeur du tableau
  let max = array[0];
  let resArray = []; // Création du tableau de retour vide

  for (let i = 0; i <= array.length - 1; i++) // Pour chaque case du tableau array (passé en paramètre)
  {
    if (array[i] < min) // Si la valeur courante est inférieur à la valeur minimum déjà calculée
      min = array[i]; // Alors min deviens la valeur courante

    if (array[i] > max) // Si la valeur courante est supérieur à max
      max = array[i]; // Alors on affecte la valeur courante à max
  }

  resArray.push(min, max); // On ajoute au tableau de retour les valeurs min et max précédement trouvées

  return resArray; // On retourne le tableau
};

let tabTest = [-5, 9, 50, 100, 128, 69, -22, 23, 1235, 64, -33]; // Création d'un tableau afin de tester la fonction

let min = minMax(tabTest)[0]; // Récupération du min
let max = minMax(tabTest)[1]; // Récupération du max

console.log(min + " & " + max); // Affichage des deux valeurs