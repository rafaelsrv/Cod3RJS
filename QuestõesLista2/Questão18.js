function soma(vetor){

    const somar = vetor.reduce((acc, current)=> acc + current,0)
    return somar
}
console.log(soma([10,20,40]))