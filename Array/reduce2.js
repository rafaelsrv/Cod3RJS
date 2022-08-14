const alunos = [
    {nome: "João", nota: 7.3, bolsista: true},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

// const resultado = alunos.map(a=>a.bolsista)
// let NaoBolsistas =0;
// function verificacaoBolsista(){
//     for (i=0;i<resultado.length;i++){        Solução sem o método reduce
//         if (resultado[i] == false){
//             NaoBolsistas++
            
//         }        
//     }
// }
// verificacaoBolsista(resultado)
// console.log(`Existem ${NaoBolsistas} alunos não-bolsistas`)

const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))



// var numeros = [0, 1, 2, 3, 4, 5, 6];
// var total = numeros.reduce((acumulador, numero, indice, original) => {
// console.info(`${acumulador} total até o momento`);
// console.log(`${numero} valor atual`);
// console.log(`${indice} indice atual`);                   Explicação do reduce
// console.log(`${original} array original`);
// return acumulador += numero;
// }, 0)
// console.warn('acaboooou');
// console.log(total)