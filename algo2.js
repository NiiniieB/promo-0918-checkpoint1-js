let tab=[2,-5,3,-6,100,4];
minMax(tab);

function minMax(arr){
   let min=arr[0];
   let max=arr[0];
   let result=[];

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] < min) { 
        min=arr[i];       
     }
     if (arr[i] > max) { 
        max=arr[i];       
     }
   }
   result.push(min,max);

   console.log(result);
   return result;
}

