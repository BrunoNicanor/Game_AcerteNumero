let teclasNumerica = document.querySelectorAll('.number');
let cadeiras = [];
const input = document.querySelector('.caixaTexto');

teclasNumerica.forEach(element => {
    element.addEventListener('click', () =>{
        if (cadeiras.length <= 3)
            cadeiras.push(element.innerHTML);

        imprimindoTexto();
        console.log(reunindoCadeira(cadeiras));
    })
});

let removerNumero = document.getElementById('backKey');
removerNumero.addEventListener('click', () =>{
    cadeiras.pop();
    imprimindoTexto();
});

let apagarTudo = document.getElementById('apagar');
apagarTudo.addEventListener('click', () =>{
    cadeiras = [];
    imprimindoTexto();
});

//Funções
function reunindoCadeira(lista){
    let palavra = '';
    lista.forEach(element => {
        palavra += element;
    });

    return palavra;
}

function imprimindoTexto(){
    input.innerHTML = reunindoCadeira(cadeiras);
}
