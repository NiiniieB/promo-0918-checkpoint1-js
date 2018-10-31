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

function minMax(tabVal){
  let min = 9999;
  let max =-88888;
  const tabextrem = [];

  for(let k  = 0; k < tabVal.length ; k++){
    for (let i = 0; i < tabVal.length ; i++) {
      if (tabVal[i] < min) {
        min = tabVal[i];
      }
      if (tabVal[i] > max) {
        max = tabVal[i];
      }
    }
  }
  tabextrem[0] = min;
  tabextrem[1] = max;
  return tabextrem;
}
