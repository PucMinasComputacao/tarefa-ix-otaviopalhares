// ====================================
// JSON COM DADOS DO PROJETO
// ====================================

const dados = [

  {
    id: 1,

    titulo: "Pontos Turísticos",

    descricao:
      "Explore cachoeiras, trilhas e paisagens incríveis.",

    conteudo:
      "Igarapé possui diversas atrações naturais, incluindo cachoeiras, trilhas ecológicas e áreas de lazer ideais para toda a família.",

    categoria: "Turismo",

    imagem:
      "https://www.minasgerais.com.br/imagens/atracoes/1506107885pMVQBd5p1n.jpg"
  },

  {
    id: 2,

    titulo: "Restaurantes",

    descricao:
      "Comida típica mineira e ótimos restaurantes.",

    conteudo:
      "A gastronomia de Igarapé é conhecida pela culinária mineira tradicional, com pratos típicos e ambientes acolhedores.",

    categoria: "Gastronomia",

    imagem:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/a8/a4/79/ambiente.jpg?w=900&h=-1&s=1"
  },

  {
    id: 3,

    titulo: "Cultura",

    descricao:
      "Conheça as tradições culturais da cidade.",

    conteudo:
      "A cultura local reúne festas religiosas, música, artesanato e manifestações típicas da região mineira.",

    categoria: "Cultura",

    imagem:
      "https://diocesedivinopolis.org.br/wp-content/uploads/2014/08/Matrizsantoantonioigarape.jpg"
  },

  {
    id: 4,

    titulo: "História",

    descricao:
      "Descubra a origem da cidade de Igarapé.",

    conteudo:
      "Igarapé possui uma rica história ligada ao desenvolvimento do interior de Minas Gerais e preserva tradições históricas importantes.",

    categoria: "História",

    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiJaTbCxymwbXav2hIMQO9jgiS7_MASku7w&s"
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

          <div class="card-body">

            <h3 class="card-title h5">
              ${item.titulo}
            </h3>

            <p class="card-text text-muted">
              ${item.descricao}
            </p>

            <a
              href="detalhes.html?id=${item.id}"

              class="btn btn-primary"
            >
              Ver detalhes
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

  // PEGAR ID DA URL
  const parametros =
    new URLSearchParams(window.location.search);

  const id = parametros.get("id");

  // PROCURAR ITEM NO JSON
  const item =
    dados.find(dado => dado.id == id);

  if (item) {

    detalhesContainer.innerHTML = `

      <div class="card shadow-lg">

        <img
          src="${item.imagem}"

          class="card-img-top"

          style="max-height:500px; object-fit:cover;"
        >

        <div class="card-body p-4">

          <h1 class="mb-3">
            ${item.titulo}
          </h1>

          <span class="badge bg-primary mb-3">
            ${item.categoria}
          </span>

          <p class="lead">
            ${item.descricao}
          </p>

          <hr>

          <p>
            ${item.conteudo}
          </p>

          <a
            href="index.html"

            class="btn btn-dark mt-3"
          >
            Voltar
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