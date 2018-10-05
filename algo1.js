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

const nbOfColumn = 4;
;
const nbOfSeatPerColumn = 3;

const theaterSeatsModelization =() => {
	const seats = [];

	// for(let i = 0; i < (nbOfColumn*nbOfSeatPerColumn); i++) {


		for(let i = 0; i < (nbOfColumn); i++) {

			for(let k = 0; k < (nbOfSeatPerColumn); k++) {
				seats[k+i] = (i)
				seats[k+i] =  (k)
			    

			}
			
		}
		console.log(seats);	
	}



theaterSeatsModelization()



	// for (let i = 0; i < 3; i++) {
	// 	//seats[i] = i+1
	// 	for (let j = 0; j < 4; j++) {
	// 		seats[i] = `${i+1}-${seats.push(j+1)} `
	// 		 console.log(seats)
		
	// 	}
	// }
		
	
