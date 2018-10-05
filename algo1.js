/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/
function myArray(){

let nbColonnes = 0;
let nbSieges = 0;
let siegeC = 0;
let siegeL = 0;
let siege = [];

  for (i = 0; i < nbColonnes.length; i ++){ 
    siegeC = nbColonnes[i];
    for ( i = 0; i < nbSieges.length; i ++){ 
      siegeL = nbSieges[i];
    }
    siege.push(siegeC);
    siege.push(siegeL);
  }
  return siege;
}
console.log(myArray([1, 2, 4, 5]))