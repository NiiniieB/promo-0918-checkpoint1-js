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

function numSiege()
{
  let tab = []; // Tableau de retour vide

  for (let col=1 ; col <= 26 ; col++) // Pour chaque colonne (variable col)
    for (let siege=1 ; siege <= 100 ; siege++) // Pour chaque siege (variable siege)
      tab.push(col + "-" + siege); // Ajout au tableau (tab) la colonne et le siege

  return tab; // Retourne le tableau précédement remplit
}

const sieges = numSiege(); // Appel de la fonction et stockage du résultat dans la variable sieges

//console.log(sieges);

for (let i=0 ; i < sieges.length ; i++) // Pour chaque index du tableau sieges
  console.log(sieges[i]); // On affiche chaque valeur