# hospital

Vamos fazer um programa de controle de um hospital

Inicialmente, vamos fazer um sistema onde seja possível fazer as seguintes operações:
- cadastrar cliente, solicitando nome, CPF e se o cliente tem convênio. O CPF precisa ser validado
- cadastrar médico, solicitando o nome, o CRM e o estado do CRM, que deve ser validado e o valor da consulta, com e sem convênio 
- cadastrar um exame, solicitando o nome do exame, um código e o preço dele, com e sem convênio
- incluir uma consulta ou um exame para um paciente, através do CPF do paciente, do crm do médico ou do código do exame
- o programa deve imprimir quanto um cliente está devendo ao hospital
- o programa deve imprimir quanto um médico vai receber
- o programa deve imprimir quanto cada exame faturou
- o programa deve imprimir quanto o hospital faturou no total

Importante: Não esqueça de implementar os valores do convênio na hora de calcular os ganhos
Importante: Você pode cadastrar os pacientes, exames, médicos em qualquer ordem
Importante: O programa deve receber a consulta ou exame para vários pacientes... não precisa necessariamente cadastrar todas consultas para um paciente de uma vez. Você pode ir cadastrando ao longo do tempo
Importante: Seu programa deve validar todas as entradas. Se é o valor de um procedimento, não pode aceitar texto
Importante: Seu programa deve ser usável para qualquer pessoa. Não queremos gastar dinheiro com treinamentos. O programa deve indicar todas as mensagens e opções de forma agradável para o usuário

A direção do hospital gostaria de ver pequenos avanços, e por isso, gostaria que as funcionalidades fosse enviadas para o GitHub de forma recorrente.

## Versão 2
A direção do hospital está muito contente com o resultado e gostaria de mais funcionalidades ao programa. Agora o seu programa deve imprimir relatórios apresentando o paciente que fez o exame ou consulta, qual o nome do cliente e qual o custo, sempre podendo ser uma dessas variáveis:
- por médico
- por exame
- por cliente

Além disso, a direção do hospital também acha um problema ter que todos os dias recadastrar os médicos, pacientes e exames. Para isso, seria importante que o programa sempre salvasse os cadastros

## Versão 3
O hospital cresceu muito de tamanho e agora as pessoas querem fazer agendamento de consultas também. Para fazer um agendamento, é necessário cadastrar qual o paciente, qual o procedimento (consulta ou exame) e o dia e o horário. É importante impedir que sejam feitos dois agendamentos no mesmo dia e horário envolvendo o exame, o médico ou o paciente

Outro ponto. O Hospital gostaria de cortar custos com o contas a receber. Seria importante que pudéssemos cadastrar qual o custo de consulta a ser pago para o médico e qual o custo com exames e incluir isso em todos os relatórios.

## Versão 4

Seu programa só faz o Hospital crescer!
O hospital não dá mais conta de ter apenas os médicos e agora vai precisar atuar com mais especialistas. Ou seja, agora é preciso cadastrar as especialidades de cada médico, e assim ao falar qual especialidade gostaria de se consultar, mostrar uma lista dos médicos dessa especialidade.
Devemos ter relatórios agora também por especialidade. Queremos saber as consultas feitas por cardiologistas, por exemplo.

## Versão 5
O Hospital ficou rico. Agora podemos utilizar um Banco de Dados pra guardar os dados do hospital!

## Versão 6
... 