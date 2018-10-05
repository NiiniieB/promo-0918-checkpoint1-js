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
function cinema(tab) {
  let col = 0
  let row = 0
  let tab = [row, col]
  
  for (i = 1; i < 27; i++) {
    tab[0] = tab[0] + 1
    for (j = 1; j < 101; j++) {
      if (tab[1] === 100) tab[1] = 0;
      if (tab[1] < 100) tab[1] = tab[1] + 1;

     console.log(tab)
    }
  }
}