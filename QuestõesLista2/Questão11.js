

function elementosExtremos(vetor){
    PrimeiroElemento = vetor[0]
    IndiceUltimoElemento = vetor.length -1
    UltimoElemento = vetor[IndiceUltimoElemento]
    return Elementos=[PrimeiroElemento,UltimoElemento]
}
console.log(elementosExtremos([2,3,4]))