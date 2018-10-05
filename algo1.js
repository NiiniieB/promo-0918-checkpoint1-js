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
let columns = 26;
let seats = 100;
const listSeat = (columns, seats) => {
  let result = [];
  for (let column = 1; column < columns + 1; column++) {
    for (let seat = 1; seat < seats + 1; seat++) {
      result.push(`${column}-${seat}`);
    }
  }
  return result;
};
