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


let colonne = 1;
let siege = 1;
let arr = [];

function siegeNum(arr) {
  for (i = 0; i <= 26; i++) {
    let colonne = 1 + 1;
    let arr2 = arr.push(colonne);

    console.log(arr2);
  }
  for (i = 0; i <= 100; i++) {
    let siege = 1 + 1;
    let arr3 = arr.push(siege);

    console.log(arr3);
  }
let arrFinal = arr2 + arr3;

return arrFinal;

}