function theatre (){
    let colonne = 26;
    let ligne = 100;
    let numéro = 1;
    let tab = [];
    for (let i=1; i<colonne+1;i++){
        for(let j=1;j<ligne+1;j++){
            let reponse = numéro + "-" + j;
            tab.push(reponse);
        }
    numéro += 1;    
    }
    return tab;
}
console.log(theatre());
