let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function textoInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número de 1 a 10');
}

textoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentivas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto em ${tentativas} ${palavraTentivas}!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', `o número é menor que ${chute}`);
        } else {
            exibirTexto('p', `o número é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadelistaDeNumeroSorteados = listaDeNumeroSorteados.length;
    if (quantidadelistaDeNumeroSorteados == numeroLimite) {
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}