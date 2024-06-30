const koders = ["Jair", "Daniel", "Maria", "Natalia"];

/* Para crear elementos, tenemos el metedo document.createElement(tagname)
recibe como argumento el tag del elemento que queremos crear, y devuelve un elemento del DOM 
*/

let paragraph = document.createElement("p");
console.log(paragraph);

/* Para crear texto tenemos el metodo document.createTextNode recibe 
como argumento un strung o una expresion de javascript que devuelva
el texto que queremos crear y devuelve un nodo de texto*/
let kodername = document.createTextNode("Gloriela");
console.log(kodername);

let koderLastName = document.createTextNode("Suarez");

let checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
/* Para insertar un elemento dentro de otro tenemos el metodo 
parentElement.append(childrenElement)  append es un metodo de cualquier
elemento del DOM recibe como argumento el o los elementos que queeremos
insertar*/

paragraph.append(kodername, koderLastName, checkbox);

console.log(paragraph);
/* 
let koderCard = document.getElementById("koder-card");

koderCard.append(paragraph); */

const createCard = (title) =>{
    let cardBody = document.createElement("div");
    cardBody.classList.add("card", "mb-3");
    // classlist es la lista de classes del elmento y el metodo add agrega una clase al elemento

    let contentElement = document.createElement("div");
    contentElement.classList.add("card-body");

    let cardTitle = document.createElement("h3");
    let cardTitleText = document.createTextNode(title);
    cardTitle.append(cardTitleText);

    let cardParagraph = document.createElement("p");
    let cardParagraphText = document.createTextNode("Card text");
    cardParagraph.append(cardParagraphText);

    let cardButton = document.createElement("button");
    let cardButtonText = document.createTextNode("Click me");
    cardButton.classList.add("btn", "btn-dark");
    cardButton.append(cardButtonText);

    contentElement.append(cardTitle, cardParagraph, cardButton);
    cardBody.append(contentElement);

    return cardBody;
}

let cardWrapper = document.getElementById("card-wrapper");

koders.forEach((koder) => {
    let newCard = createCard(koder);
    cardWrapper.append(newCard);
});





