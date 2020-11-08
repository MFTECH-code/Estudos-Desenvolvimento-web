const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo) // Só retorna true se usarmos a flag -a

if (anonimo) {
    process.stdout.write("Fala anônimo\n")
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`fala ${nome}\n`)
        process.exit()
    })
}