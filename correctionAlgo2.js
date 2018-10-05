let tab = [87, -12, 0, 45, -2];
var minMax = () => (array) => {
  let min = array[0];
  let max = array[0];
    let tab1 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    
  }
  tab1.push(min);
  tab1.push(max);
   return tab1;
}
console.log(minMax(tab));