listeSieges();

function listeSieges(){
  let resultat=[];

  for (let j = 0 ; j<=25 ;j++){
    for (let i = 1 ; i<=100 ;i++){
        resultat[i+j*100]= (j+1)+"-"+i;
    }
  }
  
  console.log(resultat);

  return resultat;

}

