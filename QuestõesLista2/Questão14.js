

function objetoParaArray(objeto) {
    const resultado = []
    for (let cc in objeto){
    resultado.push([ cc , objeto[cc] ])
    console.log( dfc in objeto)
    console.log(objeto[cc])
}
    
    return resultado
    
    }

    console.log(objetoParaArray({coisa:1,coisa2:50}))
    