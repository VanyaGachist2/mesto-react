import Avatar from '../images/IMG_8445.gif';

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pencil">
          <img src={Avatar} alt="аватарка" className="profile__image" />
        </div>
        <div className="profile__info">
          <h1 className="profile__heading">k5akp</h1>
          <p className="profile__subtitle">ggpp</p>
          <button type="button" className="profile__edit-button"></button>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>
      <section className="elements">
        <ul className="element">

        </ul>
      </section>
    </main>
  )
}

export default Main;
