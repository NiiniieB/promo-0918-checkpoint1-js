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

let tab1 = [];
let tab2 = [];
let tab3=[];

function totalNumSiege (){
  // remplir le premier tab1 juque  26
  for (i = 0; i <= 26; i++ ){
   tab1.push(i++);
  }
  // remplir le deuxième tab2 jusque 100
  for( j = 0; j <= 100; j++){
    tab2.push(j++)
  }
  //  ajouter chaque index de tab2 à tab1 avec "-" entre tab1 et tab2
  
  tab3.push(tab1[i] + " - " + tab2[i])
  return tab3   
}

console.log(totalNumSiege());
