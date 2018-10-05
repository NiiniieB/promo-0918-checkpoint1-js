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


  /* Je déclare la fonction */

function comptageDeSiege(nbColonne, nbSiege) {

  /*Je déclare le nombre de colonne ainsi que le nombre de siège par colonne donnés-> const ET mon tableau final*/

  const nbColonne = 26;
  const nbSiege = 100;
  let numSiege = [];

  /* je dois compter chaque siège pour chaque colonne -> Boucle For */

  for (let i=0; i<nbColonne; i++) {
    for (let j=0; j<nbSiege; j++) {
      /* je suis perdu */
    }

  }
  /* chaque siège que je compte pour chaque colonne doit aller dans un tableau au fur et à mesure*/


  /* Afficher le tableau final */
}