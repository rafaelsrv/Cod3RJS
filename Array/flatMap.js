const escola= [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]},{
        nome: 'Turma M2',
    alunos:[{
        nome: 'Rebeca',
        nota: 8.1
    },{
        nome: 'Roberto',
        nota: 9.3
    },
    {
        nome: 'Roberta',
        nota: 9.32474873
    }]}

    
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
console.log(notas1)
console.log(notas1)
console.log(notas1)
console.log(notas1)
console.log(notas1)
console.log(notas1)
console.log(notas1)
console.log(notas1)
console.log(notas1)
console.log(notas1)