var jogadorNome;
var jogadorPontos = 0
var jogadorEscolha = 0;

var computadorPontos = 0
var computadorEscolha = 0;

//exibe mensagem no console
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

function definirNomeJogador(nome){
    document.getElementById('jogador-nome').innerHTML = nome;
}

function sortear(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + 1; // floor -- arredonda 

}


function calcularEscolha (jogador,computador) {
    
    //escolhe a jogada do usuario
    //1 - pedra
    //2 - papel
    //3 - tesoura
    if (jogador == 1 & computador == 1){
        return 0;
    }
    else if (jogador == 1 & computador== 2){
        return 2;
    }
    else if (jogador ==  1 & computador == 3){
        return 1
    }
    else if (jogador == 2 & computador== 1){
        return 1;
    }
    else if (jogador == 2 & computador== 2){
        return 0;
    }
    else if (jogador ==  2 & computador == 3){
        return 2;
    }
    else if (jogador == 3 & computador== 1){
        return 2;
    }
    else if (jogador == 3 & computador== 2){
        return 1;
    }
    else if (jogador ==  3 & computador == 3){
        return 0;
    }
    
    //calcula e retorna quem ganhou
    // 0 - empate
    // 1- jogador
    // 2 - computador
}


function somarPontosJogador (){
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

function somarPontosComputador (){
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

//selecionado CSS computador
function selecionar(tipo,escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado')
}

function deselecionar(tipo,escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado')
}



function jogar(escolha){
    jogadorEscolha = escolha;
    selecionar('jogador',jogadorEscolha); //(tipo,escolha)
    
    computadorEscolha = sortear(1,3);
    selecionar('computador',computadorEscolha); //(tipo,escolha)
    
    var ganhador = calcularEscolha (jogadorEscolha, computadorEscolha);
    //alert(ganhador)
    if(ganhador == 0) {
        mensagem('Empate');
    }
    else if (ganhador == 1) {
        mensagem('Ponto para ' + jogadorNome);
        somarPontosJogador();
    }
    else if (ganhador == 2){
        mensagem('Ponto para o computador')
        somarPontosComputador();
    }


    setTimeout(function() {
        
        deselecionar('jogador',jogadorEscolha);
        deselecionar('computador',computadorEscolha);
        mensagem(jogadorNome + ' escolha uma opção acima...' );
    
    }, 1000);
    
}


document.getElementById('jogador-escolha-1').onclick = function() {jogar(1);};
document.getElementById('jogador-escolha-2').onclick = function() {jogar(2);};
document.getElementById('jogador-escolha-3').onclick = function() {jogar(3);};


jogadorNome = prompt('Qual é o seu nome?');
definirNomeJogador(jogadorNome);
mensagem('Bem-vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima...');


