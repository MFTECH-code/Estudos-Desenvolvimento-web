const porta = 3003
// porta -> Local onde minha aplicação estará sendo executada
const express = require('express')
const bandoDeDados = require('./bandoDeDados')
const app = express()
const bodyParser = require('body-parser')
// Importando nosso banco de dados
const bd = require('./bandoDeDados')


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos()) // Converter para JSON
})
// app.get -> estamos criando uma rota que será acessada pelo verbo http

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    // Salvar um produto no nosso banco de dados
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
// app.post -> geralmente usado em formulários

app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}.`)
})
// app.listen -> Startamos o nosso servidor

// Apenas um único processo pode ocupar uma porta