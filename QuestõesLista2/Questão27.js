function retirarString(string){
    
    
    
    
    let novaString = string.split('')

    for(i=0; i<novaString.length;i++){
        const vogais = ["a","e","i","o","u"]
        if (vogais.includes(novaString[i])){
            novaString.splice(i,1)
        }
    }return novaString.join('')
   
 
    
}console.log(retirarString("na cama eute exculaxo"))