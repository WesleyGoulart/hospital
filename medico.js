const prompt = require('prompt-sync')()

let nomeMedico
let crmMedico
let estadoCrm
let valorSemConvenio
let valorComConvenio
let dados = new Array
let novoMedico
let medicoObj = {
    nomeMedico: '',
    crmMedico: '',
    estadoCrm: '',
    valorSemConvenio: '',
    valorComConvenio: ''
}


//Colocar CRM e valor só numero. Estado só duas letras.
function cadastroMedico () {
    novoMedico = '1'
    while (novoMedico == '1') {
    nomeMedico = prompt('Digite o nome do medico: ')
    medicoObj.nomeMedico = nomeMedico
    crmMedico = parseInt(prompt('Digite o CRM: '))
    medicoObj.crmMedico = crmMedico
    estadoCrm = prompt('Estado do CRM: ')
    medicoObj.estadoCrm = estadoCrm
    valorSemConvenio = prompt('Valor sem convênio: ')
    medicoObj.valorSemConvenio = valorSemConvenio
    valorComConvenio = valorSemConvenio - (valorSemConvenio * 0.3)
    console.log('Valor com convênio: ', valorComConvenio)
    medicoObj.valorComConvenio = valorComConvenio

    dados.push(medicoObj)

    medicoObj = {
        nomeMedico: '',
        crmMedico: '',
        estadoCrm: '',
        valorSemConvenio: '',
        valorComConvenio: ''
        }

        novoMedico = prompt('Deseja cadastrar um novo Medico? Digite "1" para sim e "2" para encerrar.')
    }

    console.log(dados)
}


module.exports = {
    cadastroMedico
}