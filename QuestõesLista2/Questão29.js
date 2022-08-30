function filtro(vetor, tamanho){

   let Resultado = []
   let nova = []

   let transfString = vetor.map(variavel=>variavel.toString())
   let StringSplitada = transfString.map(varievel=>varievel.split(''))
   
   let Mapeando = StringSplitada.map(function(StringsSeparadas){
    if (StringsSeparadas.length == tamanho){
        Resultado.push(StringsSeparadas)
        nova = Resultado.map(ResultadoFinal=>ResultadoFinal.join(''))
    }return nova})
   
   
   console.log(nova)

//    let StringSplit = transfString.split('')
//    for(i=0; i<vetor.length;i++){
//    if (StringSplit.length == tamanho){
//     Resultado.push(vetor[i])

//    }}
//     console.log(Resultado)
}

filtro([500,600,7005,50000,1,20], 5)