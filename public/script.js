// =======================
// B.1 - BASE DE DADOS
// =======================
const data = {
  produtos: [
    { id: 1, nome: "iPhone 13", preco: 4500, categoria: "Celulares", imagem: "https://via.placeholder.com/150", descricao: "Apple iPhone", emEstoque: true },
    { id: 2, nome: "Samsung S22", preco: 3500, categoria: "Celulares", imagem: "https://via.placeholder.com/150", descricao: "Samsung Galaxy", emEstoque: true },
    { id: 3, nome: "Notebook Dell", preco: 5000, categoria: "Notebooks", imagem: "https://via.placeholder.com/150", descricao: "Dell Inspiron", emEstoque: false },
    { id: 4, nome: "Notebook Acer", preco: 4000, categoria: "Notebooks", imagem: "https://via.placeholder.com/150", descricao: "Acer Aspire", emEstoque: true },
    { id: 5, nome: "Mouse Gamer", preco: 150, categoria: "Acessórios", imagem: "https://via.placeholder.com/150", descricao: "Mouse RGB", emEstoque: true },
    { id: 6, nome: "Teclado Mecânico", preco: 300, categoria: "Acessórios", imagem: "https://via.placeholder.com/150", descricao: "Teclado RGB", emEstoque: true },
    { id: 7, nome: "PlayStation 5", preco: 4500, categoria: "Games", imagem: "https://via.placeholder.com/150", descricao: "Console Sony", emEstoque: false },
    { id: 8, nome: "Xbox Series X", preco: 4300, categoria: "Games", imagem: "https://via.placeholder.com/150", descricao: "Console Microsoft", emEstoque: true }
  ]
};

// =======================
// B.2 - DOM
// =======================
const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");

const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender = document.querySelector("#btnRender");

// =======================
// FUNÇÕES
// =======================

function formatPrice(preco) {
  return "R$ " + preco.toFixed(2);
}

function createProductCard(produto) {
  const card = document.createElement("div");

  card.setAttribute("data-id", produto.id);
  card.classList.add("card");

  // estilo via JS (obrigatório)
  card.style.backgroundColor = "#f9f9f9";

  card.innerHTML = `
    <h3>${produto.nome}</h3>
    <img src="${produto.imagem}">
    <p>${formatPrice(produto.preco)}</p>
    <p>${produto.categoria}</p>
    <button class="btnDetails">Ver detalhes</button>
    <button class="btnHighlight">Destacar</button>
  `;

  // eventos
  card.querySelector(".btnDetails").addEventListener("click", () => {
    showProductDetails(produto);
  });

  card.querySelector(".btnHighlight").addEventListener("click", () => {
    card.classList.toggle("highlight");
  });

  return card;
}

function renderProducts(produtos) {
  productList.innerHTML = "";

  produtos.forEach(produto => {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });

  // B.5 querySelectorAll
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    console.log("Card ID:", card.getAttribute("data-id"));
  });
}

function renderCategories() {
  const categorias = ["Todas", ...new Set(data.produtos.map(p => p.categoria))];

  categorySelect.innerHTML = "";

  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

function showProductDetails(produto) {
  productDetails.innerHTML = `
    <h3>${produto.nome}</h3>
    <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
    <p><strong>Categoria:</strong> ${produto.categoria}</p>
    <p><strong>Estoque:</strong> ${produto.emEstoque ? "Disponível" : "Indisponível"}</p>
    <p>${produto.descricao}</p>
  `;
}

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  return data.produtos.filter(produto => {
    const matchName = produto.nome.toLowerCase().includes(searchText);
    const matchCategory = selectedCategory === "Todas" || produto.categoria === selectedCategory;
    return matchName && matchCategory;
  });
}

// =======================
// EVENTOS
// =======================

searchInput.addEventListener("input", () => {
  renderProducts(filterProducts());
});

categorySelect.addEventListener("change", () => {
  renderProducts(filterProducts());
});

btnRender.addEventListener("click", () => {
  renderProducts(filterProducts());
});

// =======================
// INICIALIZAÇÃO
// =======================
renderCategories();
renderProducts(data.produtos);

function createProductCard(produto) {
  const card = document.createElement("div");

  card.setAttribute("data-id", produto.id);
  card.classList.add("card");

  card.style.backgroundColor = "#f9f9f9";

  card.innerHTML = `
    <h3>${produto.nome}</h3>
    <img src="${produto.imagem}">
    <p>${formatPrice(produto.preco)}</p>
    <p>${produto.categoria}</p>
    <button class="btnDetails">Ver detalhes</button>
    <button class="btnHighlight">Destacar</button>
  `;

  const btnDetails = card.querySelector(".btnDetails");
  const btnHighlight = card.querySelector(".btnHighlight");

  // 👉 VER DETALHES (AGORA INLINE)
  btnDetails.addEventListener("click", () => {

    // remove qualquer detalhe já aberto
    document.querySelectorAll(".detail-box").forEach(el => el.remove());

    const detailBox = document.createElement("div");
    detailBox.classList.add("detail-box");

    detailBox.innerHTML = `
      <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
      <p><strong>Categoria:</strong> ${produto.categoria}</p>
      <p><strong>Estoque:</strong> ${produto.emEstoque ? "Disponível" : "Indisponível"}</p>
      <p>${produto.descricao}</p>
    `;

    card.appendChild(detailBox);
  });

  // 👉 DESTACAR
  btnHighlight.addEventListener("click", () => {
    card.classList.toggle("highlight");
  });

  return card;
}