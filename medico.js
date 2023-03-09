const prompt = require('prompt-sync')()

let nomeMedico
let crmMedico
let estadoCrm
let valorSemConvenio
let valorComConvenio

nomeMedico = prompt('Digite o nome do medico: ')
crmMedico = parseInt(prompt('Digite o CRM: '))
estadoCrm = prompt('Estado do CRM: ')
valorSemConvenio = prompt('Valor sem convênio: ')
valorComConvenio = valorSemConvenio - (valorSemConvenio * 0.3)
console.log('Valor com convênio: ', valorComConvenio)