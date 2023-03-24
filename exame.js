const prompt = require('prompt-sync')()

let nomeExame
let codigoExame
let valorExameSemConvenio
let valorExameComConvenio
let dados = new Array
let novoExame
let exameObj = {
    nomeExame: '',
    codigoExame: '',
    valorExameSemConvenio: '',
    valorExameComConvenio: ''
}

//Código e valor do exame tem que ser em números
function cadastroExame() {
    novoExame = '1'
    while (novoExame == '1') {
        nomeExame = prompt('Digite o nome do exame: ')
        exameObj.nomeExame = nomeExame
        codigoExame = prompt('Digite o código do exame: ')
        exameObj.codigoExame = codigoExame
        valorExameSemConvenio = prompt('Valor do exame sem convênio: ')
        exameObj.valorExameSemConvenio = valorExameSemConvenio
        valorExameComConvenio = valorExameSemConvenio - (valorExameSemConvenio * 0.3)
        console.log('Valor com convênio: ', valorExameComConvenio)
        exameObj.valorExameComConvenio = valorExameComConvenio

        dados.push(exameObj)

        exameObj = {
            nomeExame: '',
            codigoExame: '',
            valorExameSemConvenio: '',
            valorExameComConvenio: ''
        }

        novoExame = prompt('Deseja cadastrar um novo exame? Digite "1" para sim e "2" para encerrar.')
    }
    console.log(dados)
}

module.exports = {
    cadastroExame
}