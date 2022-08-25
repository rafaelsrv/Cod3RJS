
function recebe(array){
let resultado = []
for(let i=0; i<array.length; i++){
    if(array[i]%2==0 && (i+1)%2==0){
        resultado.push(array[i])

    }
}return resultado
}
console.log(recebe([2,4,3,4,5,6,8,8]))