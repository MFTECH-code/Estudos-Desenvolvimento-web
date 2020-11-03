// Módulo são arquivos que as funções só são acessiveis dentro dele
// Para podermos utilizar o módulo precisamos exportar ele e depois importar para o arquvivo que desejamos utilizar esse módulo

// Padrões de módulos: ComonsJS (Usado no node), EcmaScript2015
// Formas de exportar
this.ola = 'Olá pessoal' // Podemos usar o this para exportar
exports.bemVindo = 'Bem vindo ao Node' // exports
module.exports.ateLogo = 'Até logo' // module.exports

// Tudo será guardado dentro de um objeto
console.log(this) // Foi tudo guardao dentro de um objeto