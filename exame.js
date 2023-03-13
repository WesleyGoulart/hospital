const prompt = require('prompt-sync')()

let nomeExame
let codigoExame
let valorExameSemConvenio
let valorExameComConvenio

//Código e valor do exame tem que ser em números

nomeExame = prompt('Digite o nome do exame: ')
codigoExame = prompt('Digite o código do exame: ')
valorExameSemConvenio = prompt('Valor do exame sem convênio: ')
valorExameComConvenio = valorExameSemConvenio - (valorExameSemConvenio * 0.3)
console.log('Valor com convênio: ', valorExameComConvenio)