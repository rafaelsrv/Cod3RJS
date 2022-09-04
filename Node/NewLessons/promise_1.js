
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(
        ['Ana','Bia','Rafael']
        
    )
})

p
.then( valor => valor[0])
.then(primeiro => primeiro[0])
.then(xx=>console.log(xx.toLowerCase()))



