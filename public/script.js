// B.1. Base de Dados
const data = {
    produtos: [
        { id: 1, nome: "iPhone 13", preco: 2849.00, categoria: "Celulares", imagem: "https://tinyurl.com/ycv6upcp", descricao: "Smartphone Apple com excelente câmera.", emEstoque: true },
        { id: 2, nome: "Samsung S22", preco: 1229.00, categoria: "Celulares", imagem: "https://tinyurl.com/6ey2d7k3", descricao: "O melhor da linha Android.", emEstoque: true },
        { id: 3, nome: "MacBook Air", preco: 7399.00, categoria: "Notebooks", imagem: "https://tinyurl.com/23ujn27m", descricao: "Leve, potente e com bateria duradoura.", emEstoque: false },
        { id: 4, nome: "Dell Inspiron", preco: 3899.00, categoria: "Notebooks", imagem: "https://tinyurl.com/573ryemj", descricao: "Ideal para trabalho e estudos.", emEstoque: true },
        { id: 5, nome: "Mouse Gamer RedDragon", preco: 149.00, categoria: "Acessórios", imagem: "https://tinyurl.com/59ymtmwh", descricao: "RGB com 12000 DPI.", emEstoque: true },
        { id: 6, nome: "Teclado Mecânico", preco: 349.00, categoria: "Acessórios", imagem: "https://tinyurl.com/56uaambt", descricao: "Switch Blue para melhor feedback.", emEstoque: true },
        { id: 7, nome: "PlayStation 5", preco: 4499.00, categoria: "Games", imagem: "https://tinyurl.com/3c85e8ct", descricao: "Console de última geração.", emEstoque: false },
        { id: 8, nome: "Controle Xbox", preco: 399.00, categoria: "Games", imagem: "https://tinyurl.com/yknpnww8", descricao: "Compatível com PC e Console.", emEstoque: true }
    ]
};

// B.2. Seleção de Elementos (DOM)
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');

const searchInput = document.querySelector('#search');
const categorySelect = document.querySelector('#category');
const btnRender = document.querySelector('#btnRender');

// B.3. Funções Obrigatórias

function formatPrice(preco) {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function createProductCard(produto) {
    const card = document.createElement('div');
    
    // Uso de setAttribute e classList
    card.setAttribute('data-id', produto.id);
    card.classList.add('card');
    
    // Ajuste visual via style (Obrigatório)
    card.style.border = "1px solid #eee";

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <span class="card-title">${produto.nome}</span>
        <span class="card-price">${formatPrice(produto.preco)}</span>
        <div class="card-category">${produto.categoria}</div>
        <div class="card-buttons">
            <button class="btn-details">Ver detalhes</button>
            <button class="btn-highlight">Destacar</button>
        </div>
    `;

    // Eventos nos botões do card
    const btnDet = card.querySelector('.btn-details');
    const btnHigh = card.querySelector('.btn-highlight');

    btnDet.addEventListener('click', () => showProductDetails(produto));
    btnHigh.addEventListener('click', () => card.classList.toggle('highlight'));

    return card;
}

function renderProducts(produtos) {
    productList.innerHTML = ""; // Limpa a lista
    
    produtos.forEach(prod => {
        const card = createProductCard(prod);
        productList.appendChild(card);
    });

    // B.5. Uso de querySelectorAll
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        console.log("Card renderizado ID:", c.getAttribute('data-id'));
    });
}

function renderCategories() {
    const categoriasSet = new Set(data.produtos.map(p => p.categoria));
    categoriasSet.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
}

function showProductDetails(produto) {
    const status = produto.emEstoque ? 
        '<span style="color: green">Em Estoque</span>' : 
        '<span style="color: red">Indisponível</span>';

    productDetails.innerHTML = `
        <h3>${produto.nome}</h3>
        <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p><strong>Status:</strong> ${status}</p>
        <hr>
        <p>${produto.descricao}</p>
    `;
}

function filterProducts() {
    const query = searchInput.value.toLowerCase();
    const cat = categorySelect.value;

    const filtrados = data.produtos.filter(p => {
        const bateNome = p.nome.toLowerCase().includes(query);
        const bateCat = (cat === "Todas" || p.categoria === cat);
        return bateNome && bateCat;
    });

    renderProducts(filtrados);
}

// B.4. addEventListener nos controles
searchInput.addEventListener('input', filterProducts);
categorySelect.addEventListener('change', filterProducts);
btnRender.addEventListener('click', () => renderProducts(data.produtos));

// Inicialização
renderCategories();
renderProducts(data.produtos);