// Para lermos o arquivo iremos usar um modulo que ja vem no node_modules, filesystem(fs)
const fs = require("fs") 
const caminho = __dirname + "/arquivo.json"

// Sincrono... (Não muito recomendado por que pode travar o event loop)
const conteudo = fs.readFileSync(caminho, "utf-8") // Passamos o caminho, e o encoding
console.log(conteudo)

// Assincrono... (Recomendado) 
fs.readFile(caminho, "utf-8", (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}: ${config.db.porta}`) // Note que este apareceu depois no console
})

// Por ser um JSON não seria necessário fazer o uso do filesystem
const config = require('./arquivo.json')
console.log(config.db)

// Lendo pastas com filesystem
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta")
    console.log(arquivos)
})

// __dirname -> retorna o path absoluto do diretório atual