// files.cod3r.com.br/curso-js/funcionarios.json

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// O axios é um client HTTP, ele faz requisições de algo que está remoto, ou seja, não está na nossa máquina
// Desafio retorne a mulher chineas com menor salario
// Funções
const chines = f => f.pais === 'China' // Pegando apenas chineses
const mulher = f => f.genero === 'F' // Pegando apenas sexo feminino
const salario = (func, funcAtual) => { // Pegando apenas o menor salário
    return func.salario < funcAtual.salario ? func : funcAtual
    // Se func.salario for menor que funcAtual.salrario retrona func se não resorna funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // Pegando resultado final
    const func = funcionarios.filter(chines).filter(mulher).reduce(salario)
    console.log(`nome: ${func.nome}, sexo: ${func.genero}, nacionalidade: ${func.pais}, salário: ${func.salario}`)
})

// Usamos filter para filtrar chineses e mulheres e depois usamos o reduce para pegar o menor salário.