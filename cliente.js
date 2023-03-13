const prompt = require('prompt-sync')();
const { cpf } = require('cpf-cnpj-validator');

let nomeCliente
let campoConvenio
let nomeConvenio
let campoCpf

// TODO: Validar nome. Não pode ter números
nomeCliente = prompt('Digite o nome: ')
campoCpf = prompt('Digite o CPF: ')
if (!cpf.isValid(campoCpf)) {
    while(!cpf.isValid(campoCpf)) {
        campoCpf = prompt('Digite um CPF válido: ')
    }
}
campoConvenio = prompt('Tem convênio? Digite "1" para sim e "2" para não: ')
while(campoConvenio != '1' && campoConvenio != '2') {
    campoConvenio = prompt('Tem convênio? Digite "1" para sim e "2" para não: ')
}
if (campoConvenio == '1'){
    nomeConvenio = prompt('Qual o convênio? ')
}