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

const addButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector("#popup-add-card");
const closeAddCardPopupButton = addCardPopup.querySelector(
  ".popup__close-button"
);
const addCardForm = addCardPopup.querySelector('form[name="add-card"]');
const cardTitleInput = addCardForm.querySelector("#input-card-title");
const cardLinkInput = addCardForm.querySelector("#input-card-link");

const imagePopup = document.querySelector("#popup-image");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close-button");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleLikeButtonClick(button) {
  button.classList.toggle("element__like-button_active");
}

function handleDeleteButtonClick(cardElement) {
  cardElement.remove();
}

function handleImageClick(name, link) {
  imagePopupImage.src = link;
  imagePopupImage.alt = name;
  imagePopupCaption.textContent = name;
  openPopup(imagePopup);
}

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);

  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");
  const likeButton = cardElement.querySelector(".element__like-button");
  const deleteButton = cardElement.querySelector(".element__delete-button");

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  likeButton.addEventListener("click", () => {
    handleLikeButtonClick(likeButton);
  });

  deleteButton.addEventListener("click", () => {
    handleDeleteButtonClick(cardElement);
  });

  cardImage.addEventListener("click", () => {
    handleImageClick(cardData.name, cardData.link);
  });

  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  cardsList.append(cardElement);
});

addButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});

closeAddCardPopupButton.addEventListener("click", () => {
  closePopup(addCardPopup);
});

addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCardData = {
    name: cardTitleInput.value,
    link: cardLinkInput.value,
  };

  const cardElement = createCard(newCardData);
  cardsList.prepend(cardElement);

  addCardForm.reset();
  closePopup(addCardPopup);
});

imagePopupCloseButton.addEventListener("click", () => {
  closePopup(imagePopup);
});
