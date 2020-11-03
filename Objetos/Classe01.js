class Lancamento { // Classe simples que tem construtor
    constructor(nome = 'Genérico', valor = 0){ // Nosso construtor, seria a nossa função construtora
        this.nome = nome;
        this.valor = valor;
    } 
}

class CicloFinanceiro { // Classe com métodos
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l)) // Colocano cada elemento que recebemos no param na array lancamentos
    }

    sumario() {
        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade 
    }   
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

// É uma forma alternativa de usar funções construtoras