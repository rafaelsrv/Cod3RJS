function falarDepoisDe(segundos, frase){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos *1000)
    })
}

falarDepoisDe(1, "Que legal")
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e=>console.log(e))