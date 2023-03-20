const prompt = require('prompt-sync')()
const moduloCliente = require('./cliente')

let comando

comando = prompt('Cadastrar cliente')

if (comando == '1') {
    moduloCliente.cadastroCliente()
}