const prompt = require('prompt-sync')()
const moduloCliente = require('./cliente')
const moduloMedico = require('./medico')
const moduloExame = require('./exame')
const moduloMarcarConsultaExame = require('./marcacaoconsultaexame')

let comando

comando = prompt('Para cadastrar cliente, digite "1". Para cadastrar um médico, digite "2". Para cadastrar um exame, digite "3". Para marcar um exame ou uma consulta, digite "4".: ')

if (comando == '1') {
    moduloCliente.cadastroCliente()
}

if (comando == '2'){
    moduloMedico.cadastroMedico()
}

if (comando == '3') {
    moduloExame.cadastroExame()
}

if(comando == '4') {
    moduloMarcarConsultaExame.controller()
}