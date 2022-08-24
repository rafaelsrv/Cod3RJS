function deletarUltimo( obj ){
    const novo = Object.assign({}, obj)
    console.log(`Deletando ${novo.Altura}`)
    delete novo.Altura
    
    return console.log(novo)
}
deletarUltimo({Idade:15, Altura:150},)
