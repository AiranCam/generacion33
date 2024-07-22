const blogEntries = [
  {
    image: "https://picsum.photos/800/600?random=1",
    title: "Descubrimiento Arqueológico en Egipto",
    content: `Un equipo de arqueólogos ha descubierto una tumba antigua en Egipto
      que data de hace más de 3,000 años. El hallazgo incluye artefactos y jeroglíficos
      bien conservados, lo que proporciona nuevas pistas sobre la civilización egipcia.`,
    abstract: "Hallazgo arqueológico en Egipto de 3,000 años.",
    rating: 4.8,
    creationDate: "2024-06-25",
    autor: "María López",
    avatar: "https://picsum.photos/800/600?random=6"
  },
  {
    image: "https://picsum.photos/800/600?random=2",
    title: "Nuevo Avance en Tecnología de Baterías",
    content: `Científicos han desarrollado una nueva tecnología de baterías que
      promete una mayor duración y eficiencia. Este avance podría revolucionar la industria
      de los dispositivos electrónicos y los vehículos eléctricos.`,
    abstract: "Nueva tecnología de baterías más eficiente.",
    rating: 4.7,
    creationDate: "2024-06-20",
    autor: "Juan Pérez",
    avatar: "https://picsum.photos/800/600?random=7"
  },
  {
    image: "https://picsum.photos/800/600?random=3",
    title: "Concierto Benéfico Recauda Millones",
    content: `El concierto benéfico celebrado anoche en el estadio principal de la ciudad
      recaudó millones de dólares para varias organizaciones caritativas. Artistas de renombre
      internacional participaron en el evento.`,
    abstract: "Concierto benéfico recauda millones para caridad.",
    rating: 9.9,
    creationDate: "2024-06-22",
    autor: "Ana García",
    avatar: "https://picsum.photos/800/600?random=8"
  },
  {
    image: "https://picsum.photos/800/600?random=4",
    title: "Nueva Misión Espacial a Marte",
    content: `La agencia espacial ha lanzado una nueva misión a Marte con el objetivo
      de explorar el planeta rojo y buscar signos de vida pasada. La misión incluye un rover
      avanzado con herramientas científicas innovadoras.`,
    abstract: "Misión espacial a Marte en busca de vida.",
    rating: 9.6,
    creationDate: "2024-06-18",
    autor: "Carlos Fernández",
    avatar: "https://picsum.photos/800/600?random=9"
  },
  {
    image: "https://picsum.photos/800/600?random=5",
    title: "Conservación de Vida Silvestre en África",
    content: `Organizaciones de conservación están trabajando arduamente para proteger
      la vida silvestre en África. Sus esfuerzos incluyen la lucha contra la caza furtiva y la
      preservación de hábitats naturales.`,
    abstract: "Protección de vida silvestre en África.",
    rating: 9.5,
    creationDate: "2024-06-15",
    autor: "Laura Martínez",
    avatar: "https://picsum.photos/800/600?random=10"
  }
];

  

/* 
                <div class="card blog-card mb-3">
                    <img src="https://picsum.photos/id/237/200/300" alt="">
                    <div class="card-body">
                        <h3 class="card-title">'Descubrimiento Arqueológico en Egipto'</h3>
                        <p class="card-text">Hallazgo arqueológico en Egipto de 3,000 años.</p>
                    </div>
                </div>
                <div class="card blog-card mb-3">
                    <img src="https://picsum.photos/id/237/200/300" alt="">
                    <div class="card-body">
                        <h3 class="card-title">'Descubrimiento Arqueológico en Egipto'</h3>
                        <p class="card-text">Hallazgo arqueológico en Egipto de 3,000 años.</p>
                    </div>
                </div>
                <div class="card blog-card mb-3">
                    <img src="https://picsum.photos/id/237/200/300" alt="">
                    <div class="card-body">
                        <h3 class="card-title">'Descubrimiento Arqueológico en Egipto'</h3>
                        <p class="card-text">Hallazgo arqueológico en Egipto de 3,000 años.</p>
                    </div>
                </div>
*/  

const createBlogCard = (entryObject) => {
  let {image, title, abstract} = entryObject;

  let card = document.createElement('div');
  card.classList.add('card', 'blog-card', 'mb-3');

  let cardImage = document.createElement('img');
  cardImage.setAttribute('src', image);

  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  let cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title');
  let cardTitleText = document.createTextNode(title);
  cardTitle.append(cardTitleText);

  let cardText = document.createElement('p');
  cardText.classList.add('card-text');
  let cardTextContent = document.createTextNode(abstract);
  cardText.append(cardTextContent);

  cardBody.append(cardTitle, cardText);
  card.append(cardImage, cardBody);

  return card;
}

const printBlogCards = (blogData, wrapperId) => {
  let wrapper = document.getElementById('main-posts');

  blogData.forEach(entry => {
    let blogCard = createBlogCard(entry);
    wrapper.append(blogCard);
  });
}

const createPopularItem = (entryObject) => {
  let {title} = entryObject;

  let itemAnchor = document.createElement('a');
  itemAnchor.setAttribute('href', '#');

  let entryItem = document.createElement('li');
  entryItem.classList.add('list-group-item');

  let entryHeading = document.createElement('h3');
  let entryTitle = document.createTextNode(title);
  
  entryHeading.append(entryTitle);
  itemAnchor.append(entryHeading);
  entryItem.append(itemAnchor);

  return entryItem;
};

const printPopularEntries = (popularArray, wrapperId) => {
  console.log(popularArray);
  let wrapper = document.getElementById('popular-entries');

  popularArray.forEach(entry => {
    let popularEntry = createPopularItem(entry);
    wrapper.append(popularEntry);
  });

};

printBlogCards(blogEntries, 'main-posts');
printPopularEntries(blogEntries.filter(entry => entry.rating > 9), 'popular-entries' );