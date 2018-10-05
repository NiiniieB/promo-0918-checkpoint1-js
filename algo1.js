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

const nbColonnes = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
const nbSieges = [];
const resultat = [];

function createSieges(tab) {
  for(i = 1; i < 101; i++){
    tab.push(i);
  }
  return tab;
}

createSieges(nbSieges);

function displayAll(result) {
  for(i = 0; i < nbColonnes.length; i++) {
    for(j = 0; j < nbSieges.length; j++){
      result.push(`${nbColonnes[i]} - ${nbSieges[j]}`);
    }
  }
}

displayAll(resultat);
console.log(resultat);