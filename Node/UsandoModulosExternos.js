// Vamos usar modulos de terceiros, para isso devemos utilizar o NPM (Node Package manager)
// Módulos de terceiros

// No terminal devemos rodar o comando: npm i lodash (Vamos instalar o pacote lodash neste exemplo)
// No momento em que instalamos uma pasta chamada node_modules é criada e nela estará o loadash
// npm é o gerenciador de pacotes do node, responsável por baixar a biblioteca de terceiros
// Como não queremos que a pasta node_modules não vá para o github colocamos ele no .gitignore  


// Importando para o nosso arquivo o lodash
const _ = require('lodash') // Note que não foi necessario falar o caminho, pois automaticamente
const { random } = require('lodash')
// Não precisamos passar o caminho relativo pois ele ja vai procurar dentro de node_modules, e lá ele procura um arquivo idex.js


setInterval(() => console.log(_.random(1, 10)), 2000)

// Instalando modulos de forma global
// Usamos o mesmo comando só que com a flag -g: npm i -g nodemon (nodemon será nosso exemblo)

// Nodemon é muito usada quando queremos fazer alterações e executa-las em tempo real 