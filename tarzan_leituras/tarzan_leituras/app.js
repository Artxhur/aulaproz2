/* Tarzan Leituras - app.js */
const PRODUCTS_URL = "products.json";

/* --- Estado local e utilidades --- */
let products = [];
let currentUser = JSON.parse(localStorage.getItem("tl_currentUser")) || null;
const el = id => document.getElementById(id);

function showToast(txt, time=2200){
  const t = el("toast");
  t.innerText = txt; t.style.display="block";
  setTimeout(()=>t.style.display="none", time);
}

function formatPrice(v){
  return "R$ " + v.toFixed(2).replace(".",",");
}

/* --- Roteamento simples --- */
function routeTo(hash){
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.style.display = "none");
  const target = document.querySelector(hash);
  if(target) target.style.display = "block";
  if(hash === "#home") renderFeatured();
  if(hash === "#loja") renderProducts();
  if(hash === "#carrinho") renderCart();
  if(hash === "#compras") renderPurchases();
}
document.querySelectorAll("[data-route]").forEach(btn=>{
  btn.addEventListener("click",()=> routeTo(btn.dataset.route));
});
window.addEventListener("hashchange", ()=> routeTo(location.hash || "#home"));

/* --- Load produtos --- */
async function loadProducts(){
  try {
    const r = await fetch(PRODUCTS_URL);
    products = await r.json();
    populateCategories();
    renderFeatured();
    renderProducts();
  } catch(e){
    console.error("Erro carregando produtos", e);
    showToast("Erro ao carregar produtos. Verifique o arquivo products.json");
  }
}

/* --- Categorias --- */
function populateCategories(){
  const sel = el("categoryFilter");
  const cats = ["all", ...new Set(products.map(p=>p.category))];
  sel.innerHTML = cats.map(c => `<option value="${c}">${c==="all"?"Todas":c}</option>`).join("");
}

/* --- Render destaques --- */
function renderFeatured(){
  const container = el("featured");
  container.innerHTML = "";
  products.slice(0,4).forEach(p => {
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="info">
        <h3>${p.title}</h3>
        <p>${p.author}</p>
        <div class="price">${formatPrice(p.price)}</div>
        <div style="margin-top:8px">
          <button class="btn primary" data-id="${p.id}">Comprar</button>
          <button class="btn" data-id="${p.id}" data-action="view">Detalhes</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  container.querySelectorAll("button[data-action='view']").forEach(b=>{
    b.addEventListener("click", () => openProductModal(b.dataset.id));
  });
  container.querySelectorAll("button.primary").forEach(b=>{
    b.addEventListener("click", () => addToCart(b.dataset.id));
  });
}

/* --- Render loja --- */
function renderProducts(){
  const container = el("products");
  const search = el("lojaSearch").value.toLowerCase();
  const cat = el("categoryFilter").value;
  let list = products.slice();

  if(cat !== "all"){
    list = list.filter(p => p.category === cat);
  }
  if(search){
    list = list.filter(p => p.title.toLowerCase().includes(search) || p.author.toLowerCase().includes(search));
  }

  container.innerHTML = "";
  if(list.length === 0){
    el("noResults").style.display = "block";
  } else {
    el("noResults").style.display = "none";
    list.forEach(p => {
      const div = document.createElement("div");
      div.className="card";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="info">
          <h3>${p.title}</h3>
          <p>${p.author} — <em>${p.category}</em></p>
          <div class="price">${formatPrice(p.price)}</div>
          <div style="margin-top:8px">
            <button class="btn primary" data-id="${p.id}">Adicionar ao carrinho</button>
            <button class="btn" data-id="${p.id}" data-action="view">Detalhes</button>
          </div>
        </div>
      `;
      container.appendChild(div);
    });
    container.querySelectorAll("button[data-action='view']").forEach(b=>{
      b.addEventListener("click", ()=> openProductModal(b.dataset.id));
    });
    container.querySelectorAll(".btn.primary").forEach(b=>{
      b.addEventListener("click", ()=> addToCart(b.dataset.id));
    });
  }
}

/* --- Modal produto --- */
function openProductModal(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  el("productDetail").innerHTML = `
    <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
      <img src="${p.image}" style="width:160px;height:220px;border-radius:8px;object-fit:cover">
      <div style="flex:1">
        <h2>${p.title}</h2>
        <p><strong>Autor:</strong> ${p.author}</p>
        <p><strong>Categoria:</strong> ${p.category}</p>
        <p style="margin-top:8px">${p.description}</p>
        <div style="margin-top:12px">
          <div class="price">${formatPrice(p.price)}</div>
          <div style="margin-top:12px">
            <button class="btn primary" id="modalAdd" data-id="${p.id}">Adicionar ao carrinho</button>
            <button class="btn" id="modalBuy">Comprar agora</button>
          </div>
        </div>
      </div>
    </div>
  `;
  el("productModal").style.display = "flex";
  el("modalAdd").addEventListener("click", ()=> { addToCart(p.id); el("productModal").style.display="none"; });
  el("modalBuy").addEventListener("click", ()=> { addToCart(p.id); checkout(); el("productModal").style.display="none"; });
}

/* --- Auth modal --- */
function openAuthModal(){
  el("authArea").innerHTML = `
    <h2>Conta Tarzan Leituras</h2>
    <div id="authForms">
      <div>
        <h3>Entrar</h3>
        <input id="loginEmail" placeholder="E-mail" />
        <input id="loginPass" placeholder="Senha" type="password" />
        <button id="doLogin" class="btn primary">Entrar</button>
      </div>
      <hr/>
      <div>
        <h3>Criar conta</h3>
        <input id="regName" placeholder="Nome" />
        <input id="regEmail" placeholder="E-mail" />
        <input id="regPass" placeholder="Senha" type="password" />
        <button id="doRegister" class="btn">Criar conta</button>
      </div>
    </div>
    <div id="authStatus" style="margin-top:12px;font-size:14px;color:#444"></div>
  `;
  el("authModal").style.display = "flex";
  el("doRegister").addEventListener("click", registerUser);
  el("doLogin").addEventListener("click", loginUser);
}

/* --- Account UI --- */
function refreshAccountUI(){
  const btn = el("btnAccount");
  if(currentUser){
    btn.innerText = `${currentUser.name} (sair)`;
    btn.onclick = () => { logout(); };
  } else {
    btn.innerText = "Conta";
    btn.onclick = openAuthModal;
  }
}

/* --- Auth --- */
function getUsers(){
  return JSON.parse(localStorage.getItem("tl_users")) || [];
}
function saveUsers(u){ localStorage.setItem("tl_users", JSON.stringify(u)); }

function registerUser(){
  const name = el("regName").value.trim();
  const email = el("regEmail").value.trim().toLowerCase();
  const pass = el("regPass").value.trim();
  if(!name || !email || !pass){ showToast("Preencha todos os campos"); return; }
  const users = getUsers();
  if(users.find(x=>x.email===email)){ showToast("E-mail já cadastrado"); return; }
  const id = "u_" + Date.now();
  users.push({ id, name, email, pass });
  saveUsers(users);
  showToast("Conta criada com sucesso. Faça login.");
}

function loginUser(){
  const email = el("loginEmail").value.trim().toLowerCase();
  const pass = el("loginPass").value.trim();
  const users = getUsers();
  const u = users.find(x=>x.email===email && x.pass===pass);
  if(!u){ showToast("Usuário ou senha inválidos"); return; }
  currentUser = { id: u.id, name: u.name, email: u.email };
  localStorage.setItem("tl_currentUser", JSON.stringify(currentUser));
  el("authModal").style.display="none";
  refreshAccountUI();
  showToast("Logado: " + currentUser.name);
  updateCartCount();
}

function logout(){
  currentUser = null;
  localStorage.removeItem("tl_currentUser");
  refreshAccountUI();
  showToast("Você saiu da conta");
}

/* --- Cart --- */
function getCartKey(){ return currentUser ? `tl_cart_${currentUser.id}` : `tl_cart_guest`; }
function getPurchasesKey(){ return currentUser ? `tl_purchases_${currentUser.id}` : `tl_purchases_guest`; }

function getCart(){
  return JSON.parse(localStorage.getItem(getCartKey())) || [];
}
function saveCart(c){ localStorage.setItem(getCartKey(), JSON.stringify(c)); updateCartCount(); }

function addToCart(id){
  const product = products.find(p=>p.id===id);
  if(!product){ showToast("Produto não encontrado"); return; }
  const cart = getCart();
  const found = cart.find(i => i.id === id);
  if(found) found.qty++;
  else cart.push({ id: product.id, title: product.title, price: product.price, qty:1, image: product.image });
  saveCart(cart);
  showToast("Adicionado ao carrinho");
}

function renderCart(){
  const list = getCart();
  const container = el("cartItems");
  container.innerHTML = "";
  if(list.length === 0){
    container.innerHTML = `<div class="notice">Seu carrinho está vazio.</div>`;
    el("cartTotal").innerText = "Total: R$ 0,00";
    return;
  }
  list.forEach(item => {
    const d = document.createElement("div");
    d.className = "cart-card";
    d.innerHTML = `
      <img src="${item.image}" style="width:70px;height:80px;border-radius:6px;object-fit:cover">
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between">
          <strong>${item.title}</strong>
          <div>${formatPrice(item.price)}</div>
        </div>
        <div style="margin-top:6px">
          <button class="btn" data-action="dec" data-id="${item.id}">-</button>
          <span style="margin:0 10px">${item.qty}</span>
          <button class="btn" data-action="inc" data-id="${item.id}">+</button>
          <button class="btn" data-action="remove" data-id="${item.id}" style="margin-left:8px">Remover</button>
        </div>
      </div>
    `;
    container.appendChild(d);
  });

  container.querySelectorAll("button[data-action]").forEach(b=>{
    const id = b.dataset.id;
    const act = b.dataset.action;
    b.addEventListener("click", ()=> {
      const c = getCart();
      if(act === "inc") c.forEach(x=>x.id===id?x.qty++:null);
      if(act === "dec") c.forEach(x=>{ if(x.id===id) x.qty = Math.max(1, x.qty-1); });
      if(act === "remove") { const idx = c.findIndex(x=>x.id===id); if(idx>-1) c.splice(idx,1); }
      saveCart(c);
      renderCart();
    });
  });

  const total = list.reduce((s,i)=>s + i.qty * i.price, 0);
  el("cartTotal").innerText = "Total: " + formatPrice(total);
}

function checkout(){
  if(!currentUser){
    showToast("Faça login para finalizar a compra.");
    openAuthModal();
    return;
  }
  const cart = getCart();
  if(cart.length === 0){ showToast("Carrinho vazio"); return; }
  const purchases = JSON.parse(localStorage.getItem(getPurchasesKey())) || [];
  purchases.unshift({ id: "p_" + Date.now(), items: cart, date: new Date().toISOString(), total: cart.reduce((s,i)=>s + i.price*i.qty, 0) });
  localStorage.setItem(getPurchasesKey(), JSON.stringify(purchases));
  saveCart([]); 
  renderPurchases();
  showToast("Compra finalizada! Obrigado 😊");
  routeTo("#compras");
}

/* --- NOVO: render purchases com botão de leitura --- */
function renderPurchases(){
  const list = JSON.parse(localStorage.getItem(getPurchasesKey())) || [];
  const container = el("purchasesList");
  container.innerHTML = "";
  if(list.length === 0){
    container.innerHTML = `<div class="notice">Você não tem compras ainda.</div>`;
    return;
  }
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="flex:1">
        <h3>Pedido ${p.id}</h3>
        <p><small>${new Date(p.date).toLocaleString()}</small></p>
        <div>
          ${p.items.map(i=>{
            const book = products.find(prod=>prod.id===i.id);
            return `
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <span>${i.title} x${i.qty}</span>
                <span>
                  ${formatPrice(i.price*i.qty)}
                  ${book && book.file ? `<button class="btn" onclick="openBook('${book.file}')">Ler</button>` : ""}
                </span>
              </div>
            `;
          }).join("")}
        </div>
        <div style="margin-top:8px"><strong>Total: ${formatPrice(p.total)}</strong></div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* --- NOVO: função para abrir o livro --- */
function openBook(filePath){
  window.open(filePath, "_blank");
}

function updateCartCount(){
  const cnt = getCart().reduce((s,i)=>s+i.qty,0);
  el("cartCount").innerText = cnt;
}

document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  mobileBtn && mobileBtn.addEventListener("click", ()=>{
    const nav = document.querySelector(".nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  el("searchBtn").addEventListener("click", ()=>{
    const term = el("globalSearch").value.trim().toLowerCase();
    if(!term){ routeTo("#loja"); return; }
    const found = products.filter(p => p.title.toLowerCase().includes(term) || p.author.toLowerCase().includes(term));
    if(found.length === 0){
      showToast("Não temos esse livro disponível 😕");
      return;
    }
    routeTo("#loja");
    el("lojaSearch").value = term;
    renderProducts();
  });

  el("categoryFilter").addEventListener("change", renderProducts);
  el("lojaSearch").addEventListener("input", ()=> setTimeout(renderProducts, 120));

  el("closeProductModal").addEventListener("click", ()=> el("productModal").style.display = "none");
  el("closeAuthModal").addEventListener("click", ()=> el("authModal").style.display = "none");

  el("clearCartBtn").addEventListener("click", ()=> { saveCart([]); renderCart(); });
  el("checkoutBtn").addEventListener("click", checkout);

  refreshAccountUI();
  loadProducts();
  routeTo(location.hash || "#home");
  updateCartCount();
});
