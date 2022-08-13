const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 5000, fragil: true},
    {nome: 'Copo', preco: 20, fragil: true},
    {nome: 'Copo Plástico', preco: 10, fragil: false}
]


function barato(p){
  return p.preco<500  
}

function durabilidade(p){
    return p.fragil
}

function pcCaro(p){
    return p.preco>3000
}

console.log(produtos.filter(durabilidade).filter(barato))
console.log(produtos.filter(pcCaro))
// console.log(produtos.filter(function barato(p){
//     return p.preco<500
// }))

// console.log(produtos.filter(function durabilidade(p){
//     return p.fragil==true
// }))
