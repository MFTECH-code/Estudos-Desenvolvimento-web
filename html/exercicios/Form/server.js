const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body) // Imprimindo no console do server
    resp.send('<h1>Parabéns, usuário incluido!!!</h1>') // Imprimindo na página
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id) // Imprimindo no console do server
    resp.send('<h1>Parabéns, usuário alterado!!!</h1>') // Imprimindo na página
})

app.listen(3003) // A aplicação está rodando na porta 3003