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
function theatre (arr1, arr2) {
  const newArr = []
  for (let i=0; i < arr1.length; i++) {
    for (let j=0; j < arr2.length; j++) {
      newArr.push(arr1[i] + "-" + arr2[j])
    }
  }
  return newArr;
}

/* arr1 = [1, 2, 3, .... 26]
arr2 = [1, 2, 3, ..... 100]


