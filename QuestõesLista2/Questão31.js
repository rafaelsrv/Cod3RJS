const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
const estudantesComMedias = Object.entries(estudantes).map( estudante => {
const chave = 0,
valor = 1
return { nome: estudante[chave], media: media(estudante[valor]) }
})
const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
const melhorEstudante = estudantesOrdenados[0]
return melhorEstudante
}
recerberMelhorEstudante("Rafael",[1,2,4])