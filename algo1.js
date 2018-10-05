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
// Retourne un tableau au format col-lig de col*lig éléments
let listeDesSièges = ( col, lig) => {
  let tableau = []
  let k = 0
  for (i = 0; i < col ; i++){
    for (j = 0; j < lig ; j++){
      tableau[k++] = `${i+1}-${j+1}`
    }
  }
  return tableau
}

// affichage de la liste des sièges en fonction sa colonne et de sa rangée
liste = listeDesSièges (26,100)
console.log(liste)



