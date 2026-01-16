const initialCards = [
  { name: "Vale de Yosemite", link: "./images/vale-yosemite.jpg" },
  { name: "Lago Louise", link: "./images/lago-louise.jpg" },
  { name: "Montanhas Carecas", link: "./images/montanhas-carecas.jpg" },
  { name: "Latemar", link: "./images/latemar.jpg" },
  { name: "Parque Nacional da Vanoise", link: "./images/parque-vanoise.jpg" },
  { name: "Lago di Braies", link: "./images/lago-braies.jpg" },
];

const cardsList = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#card-template").content;

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);

  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  cardsList.append(cardElement);
});

const addButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector("#popup-add-card");
const closeAddCardPopupButton = addCardPopup.querySelector(
  ".popup__close-button"
);

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

addButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});

closeAddCardPopupButton.addEventListener("click", () => {
  closePopup(addCardPopup);
});
