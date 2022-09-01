const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = m => m.genero === "F"
const menorSalario = (FuncionarioACC, FuncionarioAtual) => {
    return FuncionarioACC.salario < FuncionarioAtual.salario ? FuncionarioACC : FuncionarioAtual 
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    


const Resultado = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
console.log(Resultado)
})