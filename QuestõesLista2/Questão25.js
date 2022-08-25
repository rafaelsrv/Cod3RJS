function receber(Parametro, String){

    let contador = 0
    for(i=0; i<String.length; i++){
        if(String[i]==Parametro)
        contador++
    }return contador
}console.log(receber("C","Coisa Coisada, carai, Caramba"))