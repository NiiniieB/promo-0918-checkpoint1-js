let param = 10 ;
fibonacci(param);

function fibonacci(param) {
  let result=[]; 
  result.push(0);
  result.push(1); 
  
  for (let i = 0; i < param + 2; i++){
    result.push(result[i] + result[i +1])
  }

  console.log(result[param+1]);
  return result[param+1];
}
