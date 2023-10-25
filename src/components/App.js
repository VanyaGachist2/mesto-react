import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

    /* popup с редактированием */
      <div className="popup popup_edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_with-name-and-job" name="popup__form" novalidate>
            <label className="popup__label">
              <input type="text" id="username" name="input_name" value="Имя" className="popup__input popup__input_text_name" placeholder="Имя" required minlength="2" maxlength="40" />
              <span className="popup__error popup__error-username"></span>
            </label>
            <label className="popup__label">
              <input type="text" id="job" name="input_job" value="Работа" className="popup__input popup__input_text_after" placeholder="Должность" required minlength="2" maxlength="200" />
              <span className="popup__error popup__error-job"></span>
            </label>
            <button type="submit" className="popup__button popup__save">Сохранить</button>
          </form>
          <button type="button" className="popup__close popup__close_first"></button>
        </div>
      </div>
      /* popup с добавлением карточек */
      <div className="popup popup_add">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form popup__form_type_with-image" name="popup__form" novalidate>
            <label className="popup__label">
              <input type="text" id="name-image" name="input_name_second"  className="popup__input popup__input_text_name-image" placeholder="Название" required minlength="2" maxlength="30" />
              <span className="popup__error popup__error-name-image"></span>
            </label>
            <label className="popup__label">
              <input type="url" id="href-image" name="input_image" className="popup__input popup__input_href-image" placeholder="Ссылка на картинку" required />
              <span className="popup__error popup__error-href-image"></span>
            </label>
            <button type="submit" className="popup__button popup__create">Создать</button>
          </form>
          <button type="button" className="popup__close popup__close_second"></button>
        </div>
      </div>

      /* popup с обновлением аватара */
      <div class="popup popup_avatar">
        <div class="popup__container">
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form popup__form_type_with-avatar" name="popup__form" novalidate>
            <label class="popup__label popup__label_one">
              <input type="url" class="popup__input popup__input_href-avatar" id="href-avatar" name="input_avatar" placeholder="ссылка на аватарку" />
              <span class="popup__error popup__error-href-avatar"></span>
            </label>
            <button type="submit" class="popup__button popup__avatar">Сохранить</button>
          </form>
          <button type="button" class="popup__close popup__close_five"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
