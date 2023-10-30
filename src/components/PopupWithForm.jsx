

function PopupWithForm({ title, isOpen, name, click, buttonText, onClose, children }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" name={name} noValidate>
            {children}
            <button type="submit" className={`popup__button popup__${click}`}>{buttonText}</button>
          </form>
          <button type="button" className="popup__close" onClick={onClose}></button>
        </div>
      </div>
  )
}

export default PopupWithForm;
