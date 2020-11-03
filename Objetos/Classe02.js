class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome  
    }
}

class Pai extends Avo { // Forma de definir herença em classes
    constructor(sobrenome, profissao = 'Professor') { 
        super(sobrenome) // Usamos o super para instanciar a função construtora da class Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // Ele passa pro construtor do Avo o sobrenome 'Silva'
    }
}

const filho = new Filho
console.log(filho)