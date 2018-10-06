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
let nb= [];
let array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
let row = (array[1]);
function Seats(nb){
  for(let i=0; i < 26; i++) { 
    return array += nb;

    
   }
   
    
}
console.log (nb);
*/

/* afficher 100 fois le chiffre 1, le chiffre 2 etc jusqu'à 26
// et ajouter +1 à chaque ligne pour avoir 1-2, 1-3 ...
function array(){
  let nbSeats = [];
  for(let i = 1; i < 27; i++){
    for(let j = 1; j<101; j++){
      nbSeats.push(i+"-" +j);
    }
  }console.log(nbSeats); 

}

return array();

*/


function array(){
  let nbSeats = [];
  for(let i = 1; i < 27; i++){
    for(let j = 1; j<101; j++){
      nbSeats.push(i+"-" +j);
    }
  }console.log(nbSeats); 

}

return array();



  

  
