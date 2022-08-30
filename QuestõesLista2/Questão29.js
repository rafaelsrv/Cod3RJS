function filtro(vetor, tamanho){

   let Resultado = []
   let nova = []

   let transfString = vetor.map(variavel=>variavel.toString())              //Passei para string, dessa forma consigo splitar
   let StringSplitada = transfString.map(varievel=>varievel.split(''))      //Splitei, dessa forma consigo ver o tamanho
   
   let Mapeando = StringSplitada.map(function(StringsSeparadas){            //Verificando o tamanho
    if (StringsSeparadas.length == tamanho){                
        Resultado.push(StringsSeparadas)                                    //Se o tamanho for igual ao da variável "tamanho", push no array Resultado
        nova = Resultado.map(ResultadoFinal=>ResultadoFinal.join(''))       //Juntando os caracteres dentro do array.
    }})
   
   
   console.log(nova)

//    let StringSplit = transfString.split('')
//    for(i=0; i<vetor.length;i++){
//    if (StringSplit.length == tamanho){
//     Resultado.push(vetor[i])

//    }}
//     console.log(Resultado)
}

filtro([500,600,7005,50000,1,20], 1)