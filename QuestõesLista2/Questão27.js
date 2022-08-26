function retirarString(string){
    
    
    const vogais = "a"
    
    let novaString = string.split('')

    for(i=0; i<novaString.length;i++){

        if(novaString[i]==vogais){
            novaString.splice(i,1)
        }
    }return novaString.join('')
   
 
    
}console.log(retirarString("aleluia"))