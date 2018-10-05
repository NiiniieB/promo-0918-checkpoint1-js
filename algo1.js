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

const list = []
  for (let i=1; i<=26; i++){
      for (let s=1; s<=100; s++){
        list.push(i + "-" + s)
    }          
  }

console.log(list)

// j'ai 1 salle ( tableau ) qui contient 26 colonnes de sièges
// chaque colonnes de sièges contient 100 sièges
// je veut que ma liste affiche le numéro de la colonne ainsi que le numéro de siège

// pour que mon tableau affiche chaque siège de chaque colonne 
// je doit ajouté un élément 1 et rajouté +1 a chaque élément jusqu'a atteindre 100