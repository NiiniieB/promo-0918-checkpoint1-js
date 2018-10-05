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

on veut savoir la liste de tous les sieges
ecrire une fonction qui: 
numeroSiege = 1
nbColonne = 1
fais une boucle a chaque sieges
lis les siege de 1 a 100
tant que siege <= 100
ecrire nbColonne et numeroSiege
puis incrementer de 1 numero siege
et la stocker dans numeroSiege
quand numeroSiege arriver a 100
incrementer de 1 la colonne
lis chaque colonne de 1 a 26
donc tant que la colonne <= 26
incrementer de 1 la colonne
et la stocker dans nbColonne
 
Je sais qu'il me faut une decrementation au niveau de "numeroSiege = 100"


________________________________________________________________________
numeroSiege = 1
nbColonne = 1
	

	LIRE chaque numeroSiege de 1 a 100;
		TANT QUE le numeroSiege <= 100
		ECRIRE nbColonne + "-" + numeroSiege
		Puis faire numeroSiege += 1
		SI numeroSiege = 100
			
			Puis faire nbColonne += 1 
			TANT QUE le nbColonne <= 26
			
			


