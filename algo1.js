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

/* Function returning and displaying an array of the seats in a theater given the number of rows and columns
iNbRows : Number of rows of seats in the theater
iNbCols : Number of columns of seats in the theater
*/ 
const fDisplaySeats = (iNbRows, iNbCols) => {

  //Check if the number of rows and the number of columns are > 0, if not return an empty array
  if (iNbRows <= 0 && iNbCols <= 0) return [];

  //Initialisation of an empty array
  let arr = []

  //Run through the number of rows
  for (let i = 1; i <= iNbRows; i++) {
    //Run through the number of columns
    for (let j = 1; j <= iNbCols; j++) {
      //Add the seat number 'Row-Column' in the array
      arr.push(`${i}-${j}`); 
      //Display it in the console
      console.log(`${i}-${j}`);  
    }
  }
  //return the array created
  return arr;

}

fDisplaySeats(26, 100);