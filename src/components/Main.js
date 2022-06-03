import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import Card from "./Card";


function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {

	const [cards, setCards] = React.useState([]);
	const currentUser = React.useContext(CurrentUserContext);
	function handleCardLike(card) {
		const isLiked = card.likes.some((i) =>
			i._id === currentUser._id);
	}

	React.useEffect(() => {
		api.getInitialCards()
			.then((data) => {
				setCards(data)
			}).catch((r) => {
				console.log(r);
			})
	}, [])
	return (
		<main>
			<section className="profile">
				<div className="profile__content-container">
					<div className="profile__avatar-container">
						<img src={currentUser.avatar} alt="Аватар"
							className="profile__avatar" />
						<button className="profile__edit-avatar-button" onClick={onEditAvatar}></button>
					</div>
					<div className="profile__text-container">
						<h1 className="profile__title">{currentUser.name}</h1>
						<button className="profile__edit-button button" onClick={onEditProfile}></button>
						<h2 className="profile__subtitle">{currentUser.about}</h2>
					</div>
				</div>
				<button className="profile__post-button button" onClick={onAddPlace}></button>
			</section>
			<section className="elements" >
				{cards.map((card) =>
					<Card
						onCardLike={handleCardLike}
						onCardClick={onCardClick}
						card={card}
						key={card._id}
						name={card.name}
						link={card.link}
						likes={card.likes}
					/>
				)}
			</section>
		</main>

	)
};
export default Main