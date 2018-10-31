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

var minMax = function miniMaxi(array) {
  let min = 100000;
  let max = -100000;
  let array2 = [min, max]
  console.log(array,array2)
  for (let i = 0; i < array.length; i++) {
    console.log("i=",array[i])
   
    if (array[i] <= min) {
      console.log("je suis plus petit que min")
      min = array[i];
      console.log("min vaut",min)
      array2[0]=min
    }
    if (array[i] >= max) {
      console.log("je suis plus grand que max")
      max = array[i];
      console.log("max vaut",max)
      array2[1]=max
    }
    
  }
  
  console.log(array2)
  return array2;
}

minMax([4, 6, 35, -65, -9, 0, 67]);
minMax([-30, 5, 43, 108, -5, -7, 89]);
minMax([56, 7, 63, 9, 7, 12, 85]);