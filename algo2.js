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
let var_tableau = [-30, 5, 43, 108, -5, -7, 89]
// function minMax(array)
// {
//   let taille_tableau= array.length
//   array.sort();
//   let tableau = [array[0],array[taille_tableau]]
//   return tableau
// }

//console.log(minMax(var_tableau))

function minimumMax(array){
  let nbMin = array[0]
  let nbMax = array[0]
  let tableau = []
  for(let i=0;i<array.length;i++){
    
    if (nbMin>array[i]){
      nbMin = array[i]
    }
    if (nbMax<array[i]){
      nbMax = array[i]
    }
  }
  tableau[0]=nbMin
  tableau[1]=nbMax
  return tableau
}

console.log(minimumMax(var_tableau))