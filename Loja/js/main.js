const listaProdutos = document.getElementById("lista-produtos");
const tema = document.getElementById("trocaTema");
const aumenta = document.getElementById("aumenta");
const diminui = document.getElementById("diminui");
const lerPG = document.getElementById("lerPG");
const formPesquisa = document.getElementById("form-pesquisa");
const campoPesquisa = document.getElementById("campo-pesquisa");

let produtos = [];

async function buscarProdutos() {
    const resposta = await fetch("assets/data/produtos.json");
    produtos = await resposta.json();
    mostrarProdutos(produtos);
}

function mostrarProdutos(lista) {
    listaProdutos.innerHTML = "";
    if (lista.length === 0) {
        listaProdutos.innerHTML = `
        <div>
            <h3>Nenhum produto encontrado</h3>
            <p>Tente buscar por outro termo.</p>
        </div>
    `;
    return;
    }
    lista.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("col-4");
        card.innerHTML = `
        <div class="card h-100 mt-3">
            <div class="card-body">
                <img src="${produto.imagem}" alt="Imagem produto ${produto.nome}" class="img-fluid w-90%">
                <h3 class="card-tittle">${produto.nome}</h3>
                <p class="card-text"> ${(produto.descricao).substring(0,25) + "..."}</p>
                <p class="card-text">R$ ${produto.preco.toFixed(2)}</p>
                <button class=" btn btn-detalhes" tabindex="0">Ver Detalhes</button>
                <button class="btn btn-danger" tabindex="0">Comprar</button>
                </div>
            </div>
        `;
        const botaoDetalhes = card.querySelector(".btn-detalhes");
        botaoDetalhes.addEventListener("click", () => {
            window.location.href = `pages/detalhe.html?produto=${produto.slug}`;
        });
        listaProdutos.appendChild(card);
    });
}
    function trocaTema() {
        const body = document.body;
        const temaAtual = body.getAttribute("data-bs-theme");
        if (temaAtual === "dark") {
            body.setAttribute("data-bs-theme", "light");
        } else {
            body.setAttribute("data-bs-theme", "dark");
        }
    }
function aumentarTexto() {
    document.body.style.fontSize = "20px";
}
function diminuirTexto() {
    document.body.style.fontSize = "14px";
}
let lendo = false;
function lerPagina() {
    if (lendo) {
        speechSynthesis.cancel();
        lendo = false;
    } else {
        const texto = document.body.innerText;
        const fala = new SpeechSynthesisUtterance(texto);
        fala.lang = "pt-BR";
        fala.onend = () => {
            lendo = false;
        };
        speechSynthesis.speak(fala);
        lendo = true;
    }
}
function pesquisarProdutos() {
    const texto = campoPesquisa.ariaValueMax.toLowerCase().trim();
    const produtosFiltrados = podrutos.filter(produto =>
        produto.nome.toLowerCase().includes(texto) || 
        produto.descricao.toLowerCase().includes(texto)
    );
    mostrarProdutos(produtosFiltrados)
}
formPesquisa.addEventListener("submit", function(event) {
    event.preventDefault();
    pesquisarProdutos();
});
lerPG.addEventListener("click",lerPagina);
lerPG.addEventListener("keydown", function(event){
    if(event.key ==="Entrer"){
        lerPagina();
    }
});
aumenta.addEventListener("click",aumentarTexto);
aumenta.addEventListener("keydown", function(event){
    if(event.key ==="Entrer"){
        aumentarTexto();
    }
});
diminui.addEventListener("click",diminuirTexto);
diminui.addEventListener("keydown", function(event){
    if(event.key ==="Entrer"){
        diminuirTexto();
    }
});
tema.addEventListener("click",trocaTema);
tema.addEventListener("keydown", function(event){
    if(event.key ==="Entrer"){
        trocarTema();
        7
    }
});
document.addEventListener("DOMContentLoaded", () => {
    buscarProdutos();
});