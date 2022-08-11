console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'    //substituição de elementos
aprovados.push()          //Push em um elemento no última posição do array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()          //Ordena que os vazios sejam colocados no final do array

console.log(aprovados)     


aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(0,0, 'Elemento1', 'Elemento2')     //Primeiro dado se refere ao índice de referência, o segundo representa quantos serão deletados. O método também faz o push de outros elementos no terceiro parâmetro
console.log(aprovados)