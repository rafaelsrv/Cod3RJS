
setTimeout(function(){
    console.log('Executando callback')

    setTimeout(function(){
        console.log('Executando novamente')
        setTimeout(function(){
            console.log('Executando novamente')
        }, 2000)
    }, 2000)
}, 2000)