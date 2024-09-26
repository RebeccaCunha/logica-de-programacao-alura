/*Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
*/

let diaSemana = window.prompt('Qual é o dia da semana?')

if (diaSemana == "sábado" || diaSemana == "domingo") {
    window.alert("Bom fim de semana!")
} else {
    window.alert("Boa semana!")
}