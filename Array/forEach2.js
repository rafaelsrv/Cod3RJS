function forEach2(aprovados){

    for(i=0; i<aprovados.length; i++){

        console.log(aprovados[i])
    }
}




const aprovados =['Agatha', 'Aldo', 'Daniel', 'Raquel', 'Cacimba', 'Supa']

forEach2(aprovados,(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
}))
console.log("hehdadgffsgfdghfgdff65983172766dsefhg")