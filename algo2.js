/* 
* Corriger la fonction minMax()
* La fonction récupère un tableau de nombres positifs, négatifs ou nuls
* Et retourne un tableau à 2 entrées contenant la valeur minimale
* et la valeur maximale du tableau récupéré en entrée
* 
* Exemple 1 :
* Tableau d'entrée : [4, 6, 35, -65, -9, 0, 67]
* Résultat : [-65, 67]
* 
* Exemple 2 :
* Tableau d'entrée : [-30, 5, 43, 108, -5, -7, 89]
* Résultat : [-30, 108]
* 
* Exemple 3 :
* Tableau d'entrée : [56, 7, 63, 9, 7, 12, 85]
* Résultat : [7, 85]
*/

function minMax(array) {
  let min = array[0];
  let max = array[0];
  let minMaxTab = new Array();
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  minMaxTab.push(min,max);
  return minMaxTab;
}


let tab1 = [4, 6, 35, -65, -9, 0, 67];
let tab2 = [-30, 5, 43, 108, -5, -7, 89];
let tab3 = [56, 7, 63, 9, 7, 12, 85];

let ret1 = minMax(tab1);
let ret2 = minMax(tab2);
let ret3 = minMax(tab3);

console.log(ret1);
console.log(ret2);
console.log(ret3);