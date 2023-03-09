const prompt = require('prompt-sync')();
const { cpf } = require('cpf-cnpj-validator');

let campoNome
let campoConvenio
let nomeConvenio
let campoCpf

campoNome = prompt('Digite o nome: ')
campoCpf = prompt('Digite o CPF: ')
if (!cpf.isValid(campoCpf)) {
    while(!cpf.isValid(campoCpf)) {
        campoCpf = prompt('Digite um CPF válido: ')
    }
}
campoConvenio = prompt('Tem convênio? ')
if (campoConvenio == 's') {
    nomeConvenio = prompt('Qual o convênio? ')
} 