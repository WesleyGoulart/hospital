const prompt = require('prompt-sync')();
const { cpf } = require('cpf-cnpj-validator');

let nomeCliente
let campoConvenio
let nomeConvenio
let campoCpf
let dados = new Array
let novoCliente

// TODO: Validar nome. Não pode ter números
novoCliente = prompt('Deseja cadastrar um novo cliente? Digite "1" para sim e "2" para encerrar.')
while (novoCliente == '1') {
    nomeCliente = prompt('Digite o nome: ')
    dados = dados + nomeCliente + ','
    campoCpf = prompt('Digite o CPF: ')
    if (!cpf.isValid(campoCpf)) {
        while(!cpf.isValid(campoCpf)) {
            campoCpf = prompt('Digite um CPF válido: ')
        }
    }
    dados = dados + campoCpf + ','
    campoConvenio = prompt('Tem convênio? Digite "1" para sim e "2" para não: ')
    while(campoConvenio != '1' && campoConvenio != '2') {
        campoConvenio = prompt('Tem convênio? Digite "1" para sim e "2" para não: ')
    }
    if (campoConvenio == '1'){
        nomeConvenio = prompt('Qual o convênio? ')
        dados = dados + nomeConvenio
    }
    novoCliente = prompt('Deseja cadastrar um novo cliente? Digite "1" para sim e "2" para encerrar.')
}

console.log(dados)

