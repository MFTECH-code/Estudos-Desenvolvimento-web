// Temporizador do node
const schedule = require('node-schedule')
// Fazendo uma função que roda a cada 5 segundos, ás 4 horas da segunda feita
const tarefa1 = schedule.scheduleJob('*/5 * 4 * * 1', function() {
    console.log(`Execuntando tarefa1`, new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log("Tarefa cancelada")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 4
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2...', new Date().getSeconds())
})

// Com isso podemos criar sistemas de agenda, despertador ou para reiniciar um servidor