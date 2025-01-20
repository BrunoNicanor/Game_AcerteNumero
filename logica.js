let max = 100;
//Sorteando número aleatório
let numeroSecreto = parseInt(Math.random() * max + 1);

let menor = 1;
let maior = max;

let tentativas = 1;

//Elementos DOM
let textoInput = document.querySelector('.caixaTexto');
let textoPrincipal = document.querySelector('.display__TextoPrincipal');
let textoSecundario = document.querySelector('.display__TextoSecundario');
let enviar = document.getElementById('enviar');
let novoJogo = document.getElementById('novoJogo');
let maxDom = document.getElementById('numeroMax');

//Alterando o maior número aleatório no DOM
maxDom.innerText = max;

desabilitaBotao(novoJogo);

novoJogo.addEventListener('click', () =>{
    numeroSecreto = parseInt(Math.random() * 10 + 1);
    cadeiras = [];
    tentativas = 1;
    menor = 1;
    maior = max;

    textoPrincipal.innerHTML = "Acerte o Número";
    imprimirTextoSecundario();
    textoInput.innerHTML = "";
    habilitaBotao(enviar);
    desabilitaBotao(novoJogo);
});

enviar.addEventListener('click', () =>{
    let numeroChute = document.querySelector('.caixaTexto').textContent;

    if (numeroChute > numeroSecreto){
        textoPrincipal.innerHTML = "Errou";
        maior = numeroChute;
        imprimirTextoSecundario();
    }else 
    if(numeroChute < numeroSecreto){
        textoPrincipal.innerHTML = "Errou";
        menor = numeroChute;
        imprimirTextoSecundario();
    }else{
        textoPrincipal.innerHTML = "Acertou!!!";
        textoSecundario.innerHTML = `Na ${tentativas}ª Tentativa`;
        desabilitaBotao(enviar);
        habilitaBotao(novoJogo);
    }

    tentativas++;

    textoInput.innerHTML = "";
    //Variável de index.js
    cadeiras = [];
});

function desabilitaBotao(botao){
    botao.setAttribute('disabled','true');
    botao.style.pointerEvents = 'none';
    botao.style.backgroundColor = 'grey';
    botao.style.boxShadow = 'none';
};

function habilitaBotao(botao){
    botao.setAttribute('disabled','false');
    botao.style.pointerEvents = 'auto';
    botao.style.backgroundColor = '#809D3C';
    botao.style.boxShadow = '1px 3px 8px #4e6617';
};

function imprimirTextoSecundario(){
    textoSecundario.innerHTML = `${menor} < ? < ${maior}`;
}