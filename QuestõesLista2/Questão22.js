function MenorNumero(vetor){
   let nova = vetor.reduce((acc, current)=> acc < current ? acc : current)
   
   return nova
    
    
}
console.log(MenorNumero([2,-1,5,1,14]))