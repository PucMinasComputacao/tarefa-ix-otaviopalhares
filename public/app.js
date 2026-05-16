// ====================================
// JSON COM DADOS DO PROJETO
// ====================================

// ===================================================
// ALTERE AQUI:
// Adicione novos itens ou edite as informações.
// ===================================================

const dados = [

  {
    id: 1,

    titulo: "Pontos Turísticos",

    descricao:
      "Explore cachoeiras, trilhas e paisagens incríveis.",

    conteudo:
      "Igarapé possui diversas atrações naturais que encantam turistas durante todo o ano. A cidade conta com trilhas ecológicas, áreas verdes preservadas e cachoeiras ideais para lazer e contato com a natureza.",

    categoria: "Turismo",

    imagem:
      "https://www.minasgerais.com.br/imagens/atracoes/1506107885pMVQBd5p1n.jpg",

    // ====================================
    // ALTERE AQUI:
    // Informações extras do tópico
    // ====================================

    localizacao:
      "Zona rural de Igarapé - MG",

    horario:
      "08:00 às 18:00",

    destaque:
      "As cachoeiras da região atraem centenas de visitantes durante o verão.",

    curiosidade:
      "Muitas trilhas da cidade possuem vegetação típica do cerrado mineiro.",

    galeria: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    ]
  },

  {
    id: 2,

    titulo: "Restaurantes",

    descricao:
      "Comida típica mineira e ótimos restaurantes.",

    conteudo:
      "A gastronomia de Igarapé é conhecida pela culinária mineira tradicional, com pratos preparados em fogão a lenha, doces artesanais e ambientes familiares acolhedores.",

    categoria: "Gastronomia",

    imagem:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/a8/a4/79/ambiente.jpg?w=900&h=-1&s=1",

    localizacao:
      "Centro de Igarapé - MG",

    horario:
      "11:00 às 23:00",

    destaque:
      "Os restaurantes locais oferecem pratos típicos como feijão tropeiro e frango com quiabo.",

    curiosidade:
      "A culinária local mistura tradições do interior mineiro com receitas familiares.",

    galeria: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
    ]
  },

  {
    id: 3,

    titulo: "Cultura",

    descricao:
      "Conheça as tradições culturais da cidade.",

    conteudo:
      "Igarapé preserva importantes manifestações culturais, incluindo festas religiosas, apresentações musicais, feiras de artesanato e celebrações tradicionais ao longo do ano.",

    categoria: "Cultura",

    imagem:
      "https://diocesedivinopolis.org.br/wp-content/uploads/2014/08/Matrizsantoantonioigarape.jpg",

    localizacao:
      "Praça Central - Igarapé",

    horario:
      "Eventos em datas comemorativas",

    destaque:
      "As festas religiosas movimentam toda a cidade anualmente.",

    curiosidade:
      "Grande parte das tradições culturais foi preservada por famílias locais ao longo das gerações.",

    galeria: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063"
    ]
  },

  {
    id: 4,

    titulo: "História",

    descricao:
      "Descubra a origem da cidade de Igarapé.",

    conteudo:
      "A história de Igarapé está ligada ao desenvolvimento das regiões rurais de Minas Gerais, preservando construções antigas, tradições históricas e memórias importantes da população.",

    categoria: "História",

    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiJaTbCxymwbXav2hIMQO9jgiS7_MASku7w&s",

    localizacao:
      "Centro Histórico",

    horario:
      "Visitação livre",

    destaque:
      "O município preserva construções históricas importantes para a região.",

    curiosidade:
      "A cidade teve crescimento impulsionado pela agricultura e comércio regional.",

    galeria: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8"
    ]
  }

];

// ====================================
// HOME PAGE
// ====================================

const cardsContainer =
  document.getElementById("cards-container");

if (cardsContainer) {

  dados.forEach(item => {

    cardsContainer.innerHTML += `

      <div class="col-12 col-md-6 col-lg-4 col-xl-3">

        <div class="card h-100 shadow-sm">

          <img
            src="${item.imagem}"

            class="card-img-top object-fit-cover"

            style="height:180px;"
          >

          <div class="card-body d-flex flex-column">

            <h3 class="card-title h5">
              ${item.titulo}
            </h3>

            <p class="card-text text-muted">
              ${item.descricao}
            </p>

            <!-- ====================================
                 ALTERE AQUI:
                 Texto do botão
            ===================================== -->

            <a
              href="detalhes.html?id=${item.id}"

              class="btn btn-primary mt-auto"
            >
              Explorar
            </a>

          </div>

        </div>

      </div>

    `;
  });

}

// ====================================
// PÁGINA DE DETALHES
// ====================================

const detalhesContainer =
  document.getElementById("detalhes-container");

if (detalhesContainer) {

  // ====================================
  // ALTERE AQUI:
  // Captura do ID da URL
  // ====================================

  const parametros =
    new URLSearchParams(window.location.search);

  const id = parametros.get("id");

  // ====================================
  // ALTERE AQUI:
  // Busca do item no JSON
  // ====================================

  const item =
    dados.find(dado => dado.id == id);

  if (item) {

    detalhesContainer.innerHTML = `

      <div class="card shadow-lg border-0 overflow-hidden">

        <!-- IMAGEM PRINCIPAL -->
        <img
          src="${item.imagem}"

          class="card-img-top"

          style="
            max-height:500px;
            object-fit:cover;
          "
        >

        <div class="card-body p-4 p-lg-5">

          <!-- CATEGORIA -->
          <span class="badge bg-primary mb-3 px-3 py-2">

            ${item.categoria}

          </span>

          <!-- TÍTULO -->
          <h1 class="display-5 fw-bold mb-4">

            ${item.titulo}

          </h1>

          <!-- DESCRIÇÃO -->
          <p class="lead text-secondary">

            ${item.descricao}

          </p>

          <hr class="my-4">

          <!-- CONTEÚDO -->
          <div class="mb-5">

            <h3 class="fw-semibold mb-3">
              Sobre
            </h3>

            <p class="fs-5 text-dark">

              ${item.conteudo}

            </p>

          </div>

          <!-- INFORMAÇÕES -->
          <div class="row g-4 mb-5">

            <div class="col-md-6">

              <div class="p-4 bg-light rounded-4 h-100">

                <h5 class="fw-bold">
                  📍 Localização
                </h5>

                <p class="mb-0">
                  ${item.localizacao}
                </p>

              </div>

            </div>

            <div class="col-md-6">

              <div class="p-4 bg-light rounded-4 h-100">

                <h5 class="fw-bold">
                  ⏰ Horário
                </h5>

                <p class="mb-0">
                  ${item.horario}
                </p>

              </div>

            </div>

          </div>

          <!-- DESTAQUE -->
          <div class="alert alert-primary border-0 rounded-4 mb-5">

            <h4 class="fw-bold">
              ⭐ Destaque
            </h4>

            <p class="mb-0 fs-5">
              ${item.destaque}
            </p>

          </div>

          <!-- CURIOSIDADE -->
          <div class="alert alert-warning border-0 rounded-4 mb-5">

            <h4 class="fw-bold">
              💡 Curiosidade
            </h4>

            <p class="mb-0 fs-5">
              ${item.curiosidade}
            </p>

          </div>

          <!-- GALERIA -->
          <div class="mb-5">

            <h3 class="fw-bold mb-4">
              📸 Galeria
            </h3>

            <div class="row g-4">

              ${item.galeria.map(imagem => `

                <div class="col-md-6">

                  <img
                    src="${imagem}"

                    class="img-fluid rounded-4 shadow-sm w-100"

                    style="
                      height:250px;
                      object-fit:cover;
                    "
                  >

                </div>

              `).join("")}

            </div>

          </div>

          <!-- BOTÃO -->
          <a
            href="index.html"

            class="btn btn-dark btn-lg px-4"
          >
            ← Voltar
          </a>

        </div>

      </div>

    `;

  } else {

    detalhesContainer.innerHTML = `

      <div class="alert alert-danger">

        Item não encontrado.

      </div>

    `;
  }
}