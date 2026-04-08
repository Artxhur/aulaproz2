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
        <div class="col-12 text-center mt-5">
            <h3>Nenhum produto encontrado</h3>
            <p>Tente buscar por outro termo.</p>
        </div>
    `;
    return;
    }
    lista.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
        <div class="card h-100">
            <div class="card-body d-flex flex-column">
                <img src="${produto.imagem}" alt="Imagem produto ${produto.nome}" class="img-fluid mb-3" style="max-height: 200px; object-fit: contain;">
                <h3 class="card-title h5">${produto.nome}</h3>
                <p class="card-text flex-grow-1">${(produto.descricao).substring(0, 50) + "..."}</p>
                <p class="fs-4 fw-bold">R$ ${produto.preco.toFixed(2)}</p>
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-secondary btn-detalhes" tabindex="0">Ver Detalhes</button>
                    <button class="btn btn-danger" tabindex="0">Comprar</button>
                </div>
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
    const texto = campoPesquisa.value.toLowerCase().trim();
    const produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(texto) || 
        produto.descricao.toLowerCase().includes(texto)
    );
    mostrarProdutos(produtosFiltrados);
}

formPesquisa.addEventListener("submit", function(event) {
    event.preventDefault();
    pesquisarProdutos();
});

lerPG.addEventListener("click", lerPagina);
lerPG.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        lerPagina();
    }
});

aumenta.addEventListener("click", aumentarTexto);
aumenta.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        aumentarTexto();
    }
});

diminui.addEventListener("click", diminuirTexto);
diminui.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        diminuirTexto();
    }
});

tema.addEventListener("click", trocaTema);
tema.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        trocaTema();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    buscarProdutos();
});
