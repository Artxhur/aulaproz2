const detalheProduto = document.getElementById("detalhe-produto");
const tema = document.getElementById("trocaTema");

function pegarSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get("produto");
}

async function buscarProdutos() {
    try {
        const resposta = await fetch("../assets/data/produtos.json");
        const produtos = await resposta.json();
        const slug = pegarSlug();
        const produto = produtos.find(p => p.slug === slug);
        if (!produto) {
            detalheProduto.innerHTML = "<p class='text-danger'>Produto não encontrado</p>";
            return;
        }
        mostrarDetalhes(produto);
    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
        detalheProduto.innerHTML = "<p class='text-danger'>Erro ao carregar produto</p>";
    }
}

function mostrarDetalhes(produto) {
    const caminhoImagem = "../" + produto.imagem;
    
    detalheProduto.innerHTML = `
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">
                    <img src="${caminhoImagem}" alt="Imagem produto ${produto.nome}" class="img-fluid mb-4" style="max-height: 300px; object-fit: contain;">
                    <h1 class="card-title mb-3">${produto.nome}</h1>
                    <p class="card-text mb-4">${produto.descricao}</p>
                    <h3 class="text-danger mb-4">R$ ${produto.preco.toFixed(2)}</h3>
                    <div class="d-flex gap-2">
                        <button class="btn btn-danger">Comprar</button>
                        <a href="../index.html" class="btn btn-secondary">Voltar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    document.title = `${produto.nome} | AMOR STORE`;
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

tema.addEventListener("click", trocaTema);

document.addEventListener("DOMContentLoaded", buscarProdutos);
