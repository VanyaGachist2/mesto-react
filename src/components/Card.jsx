import React from "react";

function Card({id, title, image, likeCounter, onClick}) {

  const handleCardClick = () => {
    onClick(title, image)
  }
  return (
    <li className="element__item" key={id}>
      <img className="element__image" src={image} alt={title} onClick={handleCardClick} />
      <div className="element__info">
        <h2 className="element__heading">{title}</h2>
        <div className="element__group">
          <button type="button" className="element__button"></button>
          <p className="element__counter">{likeCounter}</p>
        </div>
      </div>
       <button type="button" className="element__trash"></button>
    </li>
  )
}

export default Card;
