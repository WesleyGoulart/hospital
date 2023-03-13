const prompt = require('prompt-sync')()
const { cpf } = require('cpf-cnpj-validator');

let marcar
let marcarConsulta
let marcarExame
let crmMedico
let codigoExame

marcar = prompt('Deseja marcar consulta ou exame? Digite "1" para consulta e "2" para exame.: ')
while(marcar != '1' && marcar != '2') {
    marcar = prompt('Digite "1" para consulta e "2" para exame.: ')
}

if (marcar == '1') {
    while (marcarConsulta != '1' && marcarConsulta != '2' && marcarConsulta != '3') {
        marcarConsulta = prompt('Deseja marcar a consulta pelo CPF do paciente (1), CRM do médico (2) ou pelo código do exame (3)?: ')
    }
    if (marcarConsulta == '1') {
        campoCpf = prompt('Digite o CPF: ')
        if (!cpf.isValid(campoCpf)) {
            while(!cpf.isValid(campoCpf)) {
                campoCpf = prompt('Digite um CPF válido: ')
            }
        }
    } else if (marcarConsulta == '2') {
        crmMedico = parseInt(prompt('Digite o CRM do médico: '))
    } else if (marcarConsulta == '3') {
        codigoExame = (prompt('Digite o código do exame: '))
    }
}

if (marcar == '2') {
    while (marcarExame != '1' && marcarExame != '2' && marcarExame != '3') {
        marcarExame = prompt('Deseja marcar a consulta pelo CPF do paciente (1), CRM do médico (2) ou pelo código do exame (3)?: ')
    }
    if (marcarExame == '1') {
        campoCpf = prompt('Digite o CPF: ')
        if (!cpf.isValid(campoCpf)) {
            while(!cpf.isValid(campoCpf)) {
                campoCpf = prompt('Digite um CPF válido: ')
            }
        }
    } else if (marcarExame == '2') {
        crmMedico = parseInt(prompt('Digite o CRM do médico: '))
    } else if (marcarExame == '3') {
        codigoExame = (prompt('Digite o código do exame: '))
    }
}

