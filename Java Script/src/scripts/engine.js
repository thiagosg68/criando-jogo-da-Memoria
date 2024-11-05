const emojis = [
    "💵",
    "💵",
    "😈",
    "😈",
    "😨",
    "😨",
    "🤑",
    "🤑",
    "🚓",
    "🚓",
    "😡",
    "😡",
    "😍",
    "😍",
    "🐮",
    "🐮",
];
let openCards = [];

let shufflEmojis = emojis.sort(()=>(Math.random()> 0.5)? 2 : -1)

for(let i= 0; i < emojis.length; i++) 
    {
    let box = document.createElement ("div");
    box.className = "item";
    box.innerHTML = shufflEmojis [i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick () {
    if(openCards.length < 2 ) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2 ) {
        setTimeout(checkMatch, 500);
    }
}
function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    else{
        openCards[0].classList.remove ("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert(" Voce venceu com  " + contadorJogadas + " Jogadas");
    }
}
let contadorJogadas = 0;
 // Função para atualizar o contador de jogadas na interface 
function atualizarContadorJogadas() {
     document.getElementById("contadorJogadas").textContent = contadorJogadas; 
    }
  //Suponha que esta seja a função que lida com o clique em uma carta
function lidarComCliqueNaCarta(carta) { 
    // Lógica do jogo aqui (verificar pares, etc.) 
    // Incrementar o contador de jogadas 
    contadorJogadas++; 
    // Atualizar o contador na interface 
    atualizarContadorJogadas(); 
} // Exemplo de como você chamaria lidarComCliqueNaCarta ao clicar em uma carta 
document.querySelectorAll('.item').forEach(carta => { 
    carta.addEventListener('click', function() { 
        lidarComCliqueNaCarta(carta); 
    }); 
});
