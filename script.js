var jogadorNome;
var computadorEscolha;

function sortear(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + 1; // floor -- arredonda 
//escolhe a jogada do usuario
//1 - pedra
//2 - papel
//3 - tesoura
function jogar(escolha){
    //sortear a jogada do computador
    computadorEscolha = sortear(1,3);
    alert(computadorEscolha);
    //calcular quem ganhou
    
    //somar pontos

    //exibir para o usuario (mao e pontuação)

    
}


document.getElementById('jogador-escolha-1').onclick = function() {jogar(1);};
document.getElementById('jogador-escolha-2').onclick = function() {jogar(2);};
document.getElementById('jogador-escolha-3').onclick = function() {jogar(3);};


jogadorNome = prompt('Qual é o seu nome?');
document.getElementById('mensagem').innerHTML = 'Bem-vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima...';
document.getElementById('jogador-nome').innerHTML = jogadorNome;

