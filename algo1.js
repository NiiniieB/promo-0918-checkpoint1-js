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
// const numeroSiege = () => {
//   let colonnes = [];
//   for (let i = 0; i < 26; i++) {
//     colone[i]= colonnes.push(i+1);
//   }
//   return colonnes;

// };
// console.log(numeroSiege);
function numeroSiege() {
  let colonnes = [];
  let compteur = 0;
  for (let i = 1; i < 27; i++) {
    // colonnes[i]= i+1;
    for (let j = 1; j < 101; j++) {
    colonnes[compteur]= i+"-"+j;
    compteur ++;
    }
  }
  return colonnes;
}
let number = numeroSiege();
console.log(number);
