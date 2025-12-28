const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector("#popup-edit-profile");
const closeButton = popup.querySelector(".popup__close-button");
const form = popup.querySelector(".popup__form");

const nameInput = popup.querySelector("#input-name");
const aboutInput = popup.querySelector("#input-about");

const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__description");

function openPopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
form.addEventListener("submit", handleProfileFormSubmit);

const likeButtons = document.querySelectorAll(".element__like-button");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("element__like-button_active");
  });
});
