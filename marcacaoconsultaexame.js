const prompt = require('prompt-sync')()
const { cpf } = require('cpf-cnpj-validator');

let marcarConsulta
let marcarExame
let crmMedico
let codigoExame
let dados = new Array
let consultaObj = {
    campoCpf: '',
    crmMedico: '',
    codigoExame: ''
}
let exameObj = {
    campoCpf: '',
    crmMedico: '',
    codigoExame: ''
}

function marcarConsultaExame(marcar) {
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
            consultaObj.campoCpf = campoCpf
        } else if (marcarConsulta == '2') {
            crmMedico = parseInt(prompt('Digite o CRM do médico: '))
            consultaObj.crmMedico = crmMedico
        } else if (marcarConsulta == '3') {
            codigoExame = (prompt('Digite o código do exame: '))
            consultaObj.codigoExame = codigoExame
        }
        
        dados.push(consultaObj)

            consultaObj = {
            campoCpf: '',
            crmMedico: '',
            codigoExame: ''
            }
    }
        

    if (marcar == '2') {
        while (marcarExame != '1' && marcarExame != '2' && marcarExame != '3') {
            marcarExame = prompt('Deseja marcar o exame pelo CPF do paciente (1), CRM do médico (2) ou pelo código do exame (3)?: ')
        }
        if (marcarExame == '1') {
            campoCpf = prompt('Digite o CPF: ')
            if (!cpf.isValid(campoCpf)) {
                while(!cpf.isValid(campoCpf)) {
                    campoCpf = prompt('Digite um CPF válido: ')
                }
            }
            exameObj.campoCpf = campoCpf
        } else if (marcarExame == '2') {
            crmMedico = parseInt(prompt('Digite o CRM do médico: '))
            exameObj.crmMedico = crmMedico
        } else if (marcarExame == '3') {
            codigoExame = (prompt('Digite o código do exame: '))
            exameObj.codigoExame = codigoExame
        }

        dados.push(exameObj)

            exameObj = {
            campoCpf: '',
            crmMedico: '',
            codigoExame: ''
            }
    }
    console.log(dados)
}

function controller() {
    let comando
    while (comando != '3') {
        comando = prompt ('Deseja marcar consulta ou exame? Digite "1" para consulta, "2" para exame ou "3" para finalizar.: ')
        if (comando == '1' || comando == '2') {
            marcarConsultaExame(comando)
        }
        if (comando == '3') {
            return
        }
    }
}

module.exports = {
    controller
}