/*Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".*/

let idade = window.prompt('Digite sua idade')

if (idade >= 18) {
    window.alert('Pode tirar a habilitação')
} else {
    window.alert('Não apto a tirar a habilitação')
}