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

/*
Afficher la liste du total des sièges
26 colonnes de sièges, de 1 à 26
100 rangs de sièges par colonne, de 1 à 100
créer un tableau contenant 26 colonnes de 100 sièges chacune
*/

/*
Début Liste sièges

Demander tableau sièges
nbColonnes = 0
nbRangées = 0

Tant que nbColonnes < 26
 nbColonne += 1
  Tant que nbRangées < 100
   nbRangées += 1
    Appeler tableau(Afficher "nbColonnes+1" + "-" + "nbRangées+1")
  Fin tant que
Fin tant que

  Retourner tableau sièges

Fin Liste sièges
*/

let sièges = new Array();

for(let i=0 ; i<26 ; i++){
  for(let j=0 ; j<100 ; j++){
    sièges.push((i+1).toString() + "-" + (j+1).toString());
  }
}
console.log(sièges);