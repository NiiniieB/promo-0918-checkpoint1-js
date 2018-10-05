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
function count() {
  let tab = new Array();
  let count = 1;
  let c = 1;
  // console.log('array empty :' + tab);
  // for (let i = 0; i < 26; i++){
  //   tab[i] = count;
  //   for(let y = 1; y <= 100; y++){
  //     tab[i] = tab[i] + tab.push(c);
  //   }
  //   count += 1;
  //   c = 1;
  // }
  // return (tab);

  // for(let i = 0; i < 26; i++){
  //   tab[i] = new Array ();
  //   for(let y = 0; y < 100; y++){
  //     tab[i][y] = count;
  //     count += 1;
  //   }
  //   count = 1;
  // }

  for(let i = 1; i < 27; i++){
    for(let y = 1; y < 101; y++){
      let display = i + '-'  + y;
      tab.push(display);
    }
  }
  //console.log(tab);
  return(tab);
}
