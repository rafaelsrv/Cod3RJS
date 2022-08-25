function receber(Parametro, String){
    
    let contador = 0
    let StringSeparada = String.split()
    for(i=0; i<String.length; i++){
        if(String[i].toUpperCase()==Parametro)
        contador++
    }return contador
}console.log(receber("C","Coisa Coisada, carcai, Caramba"))