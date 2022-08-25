function recebeNum(numero){
    let resultado =Math.floor(Math.random()*11)
    if (resultado==numero){
        console.log("Parabéns, você acertou")}else{
            console.log(`Você digitou ${numero}, porém o número sorteado foi ${resultado}`)
        }
    }

    


recebeNum(3)
