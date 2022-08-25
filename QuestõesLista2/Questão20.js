function media(array){

    let resultado = 0

    let soma = array.reduce((acc, current)=> acc + current)
    resultado = soma/array.length
    return resultado
}
console.log(media([10,30,60,100]))
