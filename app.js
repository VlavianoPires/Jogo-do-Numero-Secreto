let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
//console.log(numeroSecreto);
let tentativas = 1;

  function ExibirTextoNaTela (tag, texto){
  let campo = document.querySelector (tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
   ExibirTextoNaTela("h1", "Jogo do número secreto");
   ExibirTextoNaTela("p", "Escolha um número de 1 a 10");
}
exibirMensagemInicial();

function verificarChute(){
   let chute = document.querySelector('input').value;
   if(chute == numeroSecreto){
      ExibirTextoNaTela('h1', 'Acertou!!');
       let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
      let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}`;
      ExibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
      if (chute > numeroSecreto){
         ExibirTextoNaTela('p', 'O número secreto é menor');
;      }else{
         ExibirTextoNaTela('p', 'O número secreto é maior');
}
         tentativas++;
   }
  
   limparcampo();
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
}
     

     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {    
         return gerarNumeroAleatorio();
     }else{
           listaDeNumerosSorteados.push(numeroEscolhido);
           console.log(listaDeNumerosSorteados);
           return numeroEscolhido;
     }
}
 function limparcampo(){
   chute = document.querySelector("input");
   chute.value = "";
}


 function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
  // limparcampo() ='';
  exibirMensagemInicial();
//  tentativas = 1;
   document.getElementById('reiniciar').setAttribute('disabled', true) ;
}


