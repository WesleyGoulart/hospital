const prompt = require('prompt-sync')()
const moduloCliente = require('./cliente')
const moduloMedico = require('./medico')

let comando

comando = prompt('Para cadastrar cliente, digite "1". Para cadastrar um médico, digite "2": ')

if (comando == '1') {
    moduloCliente.cadastroCliente()
}

if (comando == '2'){
    moduloMedico.cadastroMedico()
}