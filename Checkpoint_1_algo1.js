function theatre(){
    let siege = [];
    let numero = 1;
    for(i=1; i!=27 ;i++){
        for(j=1; j!=101 ; j++){
            siege.push(i+"-"+j);
        }
    }
    return siege
}
console.log(theatre())