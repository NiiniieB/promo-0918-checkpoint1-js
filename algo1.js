/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonne de sièges, numérotés de "1" à "26"
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


var chair={
        column : 26,
        row : 100
      }
var table=new Array;
      function theater(chair) {
        for(let i = 1; i <= chair.column; i++){
          for(let y = 1; y <= chair.row; y++){
                table.push((i)+ "-"+(y))
          }
        }
        return table;
      }
theater(chair)
console.log(table);
