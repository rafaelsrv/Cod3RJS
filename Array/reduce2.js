const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a=>a.bolsista)
// let NaoBolsistas =0;
// function verificacaoBolsista(resultado){
//     for (i=0;i<resultado.length;i++){
//         if (resultado[i] == false){
//             NaoBolsistas++
            
//         }                                            Solução sem o método reduce.
//     }
// }
// verificacaoBolsista(resultado)
// console.log(`Existem ${NaoBolsistas} alunos não-bolsistas`)

