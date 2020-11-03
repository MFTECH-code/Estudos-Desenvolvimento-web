// Variáveis fora do objeto serão vistas apenas dentro do módulo
let num = 2

module.exports = { // Nessa forma sempre devemos usar module.exports para evitar problemas
    bomDia : 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}

// Exportando da forma clássica, que é atribuindo um objeto ao module.exports
console.log(this) // Note que nesse caso como criamos um objeto, não é armazenado no objeto this