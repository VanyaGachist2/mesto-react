import PopupWithForm from './PopupWithForm.jsx';
import React, { useEffect } from "react";
import { useState } from "react";
import { api } from '../utils/Api.js';
import Card from './Card.jsx';
import ImagePopup from './ImagePopup.jsx';

function Main() {

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    api.getInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
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

  const handleOpenFullImageCard = (title, image) => {
    setSelectedCard({title, image})
  }

  function closeAllPopups() {
    setIsAddPopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsEditPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div>
      <main className="content">
        <section className="profile">
          <div className="profile__pencil" onClick={handleOpenAvatarPopup}>
            <img src={userAvatar} alt="аватарка" className="profile__image" />
          </div>
          <div className="profile__info">
            <h1 className="profile__heading">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button type="button" className="profile__edit-button" onClick={handleOpenEditPopup}></button>
          </div>
          <button type="button" className="profile__add-button" onClick={handleOpenAddPopup}></button>
        </section>
        <section className="elements">
          <ul className="element">
            {
              cards.map((card) => (
                <Card
                key={card._id}
                title={card.name}
                image={card.link}
                likeCounter={card.likes.length}
                onClick={handleOpenFullImageCard}
                />
              ))
            }
          </ul>
        </section>
      </main>

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
    </div>
  )
}

export default Main;
