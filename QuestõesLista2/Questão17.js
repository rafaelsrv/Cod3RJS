function bisexto(numero){
    if(numero%4==0){
        if(numero%100==0 && numero%400==0){
            console.log("O ano é bisexto")
        }else console.log("O ano é bisexto")
    }else console.log("O ano não é bisexto")
}
bisexto(2022)