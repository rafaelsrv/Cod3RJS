Inclusivo = false
function verificar(nMenor,nMeio,nMaior,Inclusivo){
    
    if(Inclusivo == true)
        {
            if(nMenor<=nMeio && nMaior>=nMeio){
                return true;
            }else{
                return false;
            }
        
    }if(Inclusivo == false){
        if(nMenor<nMeio && nMaior>nMeio){
            return true;
        }else{
            return false;
        }
    
}
}
console.log(verificar(18,18,40,false))