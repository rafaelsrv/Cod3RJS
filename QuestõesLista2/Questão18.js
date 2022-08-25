function ArraySum(array){
    let resultadoSoma = 0

    for(i=0; i<array.length; i++){
        resultadoSoma += array[i]
    }
    return resultadoSoma

}
console.log(ArraySum([5,10,15,20]))