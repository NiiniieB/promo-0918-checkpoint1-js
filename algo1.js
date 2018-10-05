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
var daysArray = ["1", "2", "3", "4", "5"];
var courseHwork = ["4", "8", "15", "16", "23", "42"];

var arr = daysArray.concat(courseHwork);
var sorted_arr = arr.sort();
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        console.log(results.push(sorted_arr[i]));
    }
}