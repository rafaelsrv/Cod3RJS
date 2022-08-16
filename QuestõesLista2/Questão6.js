function inverso(valor){
    const tipo = typeof valor
    if(tipo == "boolean")
    return !valor
    else if(tipo == "number")
    return -valor
    else return `Booleano or number expected, this parameter is a ${tipo}` 
    
}

console.log(inverso(["k"]))