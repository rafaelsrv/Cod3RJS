function identificador (valor){
    let variavel=0
    if(valor === true){
        variavel = false 
        
        console.log(variavel)
    }else if(valor ===false){
        variavel = true
        console.log(variavel)
    }else if (valor%1==0){
        variavel=-valor
        console.log(variavel)
    }else {
        console.log(`Foi passado um dado do tipo ${typeof(valor)}, que não é válido`)
    }
}
identificador()