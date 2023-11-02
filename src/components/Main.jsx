import Card from './Card.jsx';

function Main({avatarPopup, editPopup, addPopup, cards, userData, imagePopup}) {
  return (
    <div>
      <main className="content">
        <section className="profile">
          <button className="profile__pencil" type='button' onClick={avatarPopup}>
            <img src={userData.avatar} alt="аватарка" className="profile__image" />
          </button>
          <div className="profile__info">
            <h1 className="profile__heading">{userData.name}</h1>
            <p className="profile__subtitle">{userData.about}</p>
            <button type="button" className="profile__edit-button" onClick={editPopup}></button>
          </div>
          <button type="button" className="profile__add-button" onClick={addPopup}></button>
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
                onClick={imagePopup}
                />
              ))
            }
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Main;
