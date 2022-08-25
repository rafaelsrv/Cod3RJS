function receber(Parametro, String){
    
    let resultado = []
    
    
    for(let i=0; i< String.length; i++){
    if(String[i].includes(Parametro))
        resultado.push(String[i])
    }return resultado
}


    



console.log(receber("pro", ["programadores", "programam", "programas","pra","hdasuh","professor"]))