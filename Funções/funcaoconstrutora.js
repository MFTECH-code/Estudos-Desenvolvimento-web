// O OO do JS é mais baseado em função, embora existam classes em JS...

// A função construtora é o molde dos objetos que você pode estar criando

function carro (VelocidadeMaxima = 200, Delta = 5) {
    // atributo privado
    let VelocidadeAtual = 0;

    // Método público
    this.acelerar = function () {
        if (VelocidadeAtual + Delta <= VelocidadeMaxima) {
            VelocidadeAtual += Delta;
        }
        else {
            VelocidadeAtual = VelocidadeMaxima;
        }
    }

    // Método público
    this.GetVelocidadeAtual = () => VelocidadeAtual;
}

// Criando objetos

const uno = new carro; // Sempre que criamos um objeto usamos o new para falar que é um novo objeto
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.GetVelocidadeAtual());  