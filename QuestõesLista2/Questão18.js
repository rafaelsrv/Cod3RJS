function ArraySum(array){
    let resultadoSoma = 0

    array.forEach(element => {
        resultadoSoma +=element
        
    });
    
    
    return resultadoSoma

}
console.log(ArraySum([5,10,15,20]))