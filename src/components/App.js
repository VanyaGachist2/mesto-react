import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import { api } from "../utils/Api.js";
import ImagePopup from "./ImagePopup.jsx";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";

function App() {

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    about: '',
    avatar: ''
  })
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    api.getInfo()
      .then((data) => {
        setUserData({
          name: data.name,
          about: data.about,
          avatar: data.avatar
        })
      })
      .catch((err) => {
        console.log(err);
      });
    api.getCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleOpenEditPopup = () => {
    setIsEditPopupOpen(true);
  }

  const handleOpenAddPopup = () => {
    setIsAddPopupOpen(true);
  }

  const handleOpenAvatarPopup = () => {
    setIsAvatarPopupOpen(true);
  }

  const handleOpenFullImageCard = useCallback((title, image) => {
    setSelectedCard({title, image})
  }, []);

  function closeAllPopups() {
    setIsAddPopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsEditPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <PopupWithForm
        title="Новое Место"
        isOpen={isAddPopupOpen}
        name="add"
        click="save"
        onClose={closeAllPopups}
        >
        <label className="popup__label">
          <input
            type="text"
            id="name-image"
            name="input_name_second"
            className="popup__input popup__input_text_name-image"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30" />
          <span className="popup__error popup__error-name-image"></span>
        </label>
        <label className="popup__label">
          <input type="url"
          id="href-image"
          name="input_image"
          className="popup__input popup__input_href-image"
          placeholder="Ссылка на картинку"
          required />
          <span className="popup__error popup__error-href-image"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        isOpen={isEditPopupOpen}
        name="edit"
        click="save"
        onClose={closeAllPopups}
        >
        <label className="popup__label">
          <input
            type="text"
            id="username"
            name="input_name"
            value="Имя"
            className="popup__input popup__input_text_name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40" />
          <span className="popup__error popup__error-username"></span>
        </label>
        <label className="popup__label">
          <input
          type="text"
          id="job"
          name="input_job"
          value="Работа"
          className="popup__input popup__input_text_after"
          placeholder="Должность"
          minLength="2"
          maxLength="200"
          required />
          <span className="popup__error popup__error-job"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        isOpen={isAvatarPopupOpen}
        name="avatar"
        click="save"
        onClose={closeAllPopups}
        >
        <label className="popup__label popup__label_one">
          <input
            type="url"
            id="href-avatar"
            name="input_avatar"
            className="popup__input popup__input_href-avatar"
            placeholder="ссылка на аватарку"
            required
             />
          <span className="popup__error popup__error-href-avatar"></span>
        </label>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isClose={closeAllPopups}
      />
      <Header />
      <Main
        avatarPopup={handleOpenAvatarPopup}
        editPopup={handleOpenEditPopup}
        addPopup={handleOpenAddPopup}
        cards={cards}
        userData={userData}
        imagePopup={handleOpenFullImageCard}
      />
      <Footer />
    </div>
  );
}

export default App;
