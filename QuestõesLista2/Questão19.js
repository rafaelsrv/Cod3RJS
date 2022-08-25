
function passarProduto(itens){
resultado = 0

resultado = itens.map(itens => itens.preco).reduce((acc, current) => acc + current)
return resultado
}
console.log(passarProduto([{nome: "cinema", area: "shopping", preco: 20},{nome: "sabao", area: "limpeza", preco:20}]))