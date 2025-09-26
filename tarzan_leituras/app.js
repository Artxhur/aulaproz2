let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let purchases = JSON.parse(localStorage.getItem("purchases")) || [];
let users = JSON.parse(localStorage.getItem("users") || "[]");

const productsContainer = document.getElementById("products");
const featuredContainer = document.getElementById("featured");
const cartItemsContainer = document.getElementById("cartItems");
const purchasesContainer = document.getElementById("purchasesList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

// -------------------- Carrinho --------------------
function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-card";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="width:60px;height:90px;object-fit:cover;">
      <div>
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <p>R$ ${item.price.toFixed(2)}</p>
      </div>
      <button onclick="removeFromCart('${item.id}')">❌</button>
    `;
    cartItemsContainer.appendChild(div);
    total += item.price;
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if(product) cart.push(product);
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  updateCart();
}

document.getElementById("checkoutBtn").addEventListener("click", ()=>{
  if(cart.length === 0){ alert("Carrinho vazio."); return; }
  purchases.push(...cart);
  cart = [];
  updateCart();
  renderPurchases();
  alert("Compra finalizada!");
});

document.getElementById("clearCartBtn").addEventListener("click", ()=>{
  cart = [];
  updateCart();
});

// -------------------- Compras --------------------
function renderPurchases() {
  purchasesContainer.innerHTML = "";
  purchases.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="info">
        <h3>${p.title}</h3>
        <p>${p.author}</p>
        <p>${p.description}</p>
        <p class="price">R$ ${p.price.toFixed(2)}</p>
        <a href="${p.file}" download class="btn primary">Baixar PDF</a>
      </div>
    `;
    purchasesContainer.appendChild(div);
  });
  localStorage.setItem("purchases", JSON.stringify(purchases));
}

// -------------------- Produtos --------------------
function renderProducts(list, container) {
  container.innerHTML = "";
  if(list.length === 0){
    document.getElementById("noResults").style.display = "block";
    return;
  } else {
    document.getElementById("noResults").style.display = "none";
  }
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="info">
        <h3>${p.title}</h3>
        <p>${p.author}</p>
        <p>${p.description}</p>
        <p class="price">R$ ${p.price.toFixed(2)}</p>
        <button onclick="addToCart('${p.id}')" class="btn primary">Adicionar ao carrinho</button>
      </div>
    `;
    container.appendChild(div);
  });
}

// -------------------- Pesquisa e Filtros --------------------
document.getElementById("searchBtn").addEventListener("click", ()=>{
  const term = document.getElementById("globalSearch").value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(term) || p.author.toLowerCase().includes(term));
  renderProducts(filtered, featuredContainer);
});

document.getElementById("lojaSearch").addEventListener("input", ()=>{
  const term = document.getElementById("lojaSearch").value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(term) || p.author.toLowerCase().includes(term));
  renderProducts(filtered, productsContainer);
});

document.getElementById("categoryFilter").addEventListener("change", ()=>{
  const cat = document.getElementById("categoryFilter").value;
  const filtered = cat === "all" ? products : products.filter(p => p.category === cat);
  renderProducts(filtered, productsContainer);
});

// -------------------- Carregar Produtos --------------------
fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products, productsContainer);
    renderProducts(products, featuredContainer);
    updateCart();

    // Preencher categorias
    const categories = ["all", ...new Set(products.map(p => p.category))];
    const select = document.getElementById("categoryFilter");
    select.innerHTML = "";
    categories.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      select.appendChild(opt);
    });
  })
  .catch(err => console.error("Erro ao carregar products.json:", err));

// -------------------- Autenticação --------------------
const authModal = document.getElementById("authModal");
const btnAccount = document.getElementById("btnAccount");
const closeAuth = document.getElementById("closeAuthModal");

btnAccount.addEventListener("click", ()=> authModal.style.display = "flex");
closeAuth.addEventListener("click", ()=> authModal.style.display = "none");

// Alternar login / cadastro
const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

showLogin.addEventListener("click", ()=>{
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

showRegister.addEventListener("click", ()=>{
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// Botões login / registro
document.getElementById("loginBtn").addEventListener("click", ()=>{
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = users.find(u=>u.email===email && u.password===password);
  if(user){
    alert("Login bem-sucedido!");
    authModal.style.display = "none";
  } else {
    alert("Email ou senha incorretos.");
  }
});

document.getElementById("registerBtn").addEventListener("click", ()=>{
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  if(!email || !password){ alert("Preencha todos os campos."); return; }
  if(users.some(u=>u.email===email)){ alert("Email já cadastrado."); return; }
  users.push({email,password});
  localStorage.setItem("users", JSON.stringify(users));
  alert("Cadastro realizado com sucesso!");
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});
