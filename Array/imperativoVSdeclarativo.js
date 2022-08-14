const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'João', nota: 9.2}

]

let total1 = 0
for (let i = 0; i < alunos.length; i++){                //Método imperativo
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

const getNota = aluno => aluno.nota
const getSoma = (total, atual) => total + atual

const soma = alunos.map(getNota).reduce(getSoma)        //Método declarativo
console.log(soma / alunos.length)