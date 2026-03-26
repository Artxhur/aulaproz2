const detalheProduto = document.getElementById("detalhe-produto");

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
            detalheProduto.innerHTML = "<p>Produto não encontrado</p>";
            return;
        }
        mostrarDetalhes(produto);
    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
        detalheProduto.innerHTML = "<p>Erro ao carregar produto</p>";
    }
}

function mostrarDetalhes(produto) {
    
    detalheProduto.innerHTML = `
    <div class="container">
        <div clas="col-8">
            <div class="card h-100 mt-3">
                <div class="card-body">
                        <img src="${produto.imagem}" alt="Imagem produto ${produto.nome}"
                        <h1>${produto.nome}</h1>
                        <p>${produto.descricao}</p>
                        <h3>R$ ${produto.preco.toFixed(2)}</h3>
                        <button>Comprar</button>
                        <a href="../index.html">Voltar</a>
    </div>
        </div>
            </div>
                </div>
    `;
    document.title = `${produto.nome} | Loja da Fran`;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
        metaDescription.setAttribute("content", produto.descricao);
    }
}
document.addEventListener("DOMContentLoaded", buscarProdutos);