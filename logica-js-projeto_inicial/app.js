let numeroSecreto = parseInt(Math.random() * 10 + 1);
let numeroMaximo = 100;
let chute;
let tentativas = 1;
console.log(numeroSecreto)

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = window.prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if(chute == numeroSecreto) {
        break;
    } else {
        if( chute > numeroSecreto) {
            window.alert(`O número secreto é menor que ${chute}.`);
        } else {
            window.alert(`O número secreto é maior que ${chute}.`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

// operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
window.alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


/*if(tentativas > 1 ) {
    window.alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    window.alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/

