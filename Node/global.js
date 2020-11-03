// console.log(global)
global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'system'
}
console.log(global) // Note que adicionamos mais coisas no nosso objeto global
// O objeto global é acessível em todos os arquivos, seria uma forma de importar dados, mas raramente usada pois o node já possui um sistema de exportação
