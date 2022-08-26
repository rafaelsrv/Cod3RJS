function reverter (objeto){

    for (var [key, value] of Object.entries(objeto)){
        console.log(value+':'+key)
    }
}reverter({id1:1, id2:2})