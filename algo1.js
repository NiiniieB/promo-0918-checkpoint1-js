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


const theatre = () => {
	let siege = [];
	a=1;
	b=1;
	for (let i = 0; i<2600; i++)
	{
			siege[i]=a+"-"+b;
		
			b+=1;
			if (b>100){
				b=1;
				a+=1
			}
	}
		
	return siege;
	
}

console.log(theatre())