const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento.
console.log(pilotos)

pilotos.push('Vestappen') // Adiciona um último elemento.
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento.
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um primeiro elemento.
console.log(pilotos)

//splice pode adicionar e remover

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
console.log(pilotos.length)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)   // Recebe o vetor a partir da posição setada.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // Segundo parâmetro é o limite do vetor.
console.log(algunsPilotos2)