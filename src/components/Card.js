import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, name, link, likes, onCardClick }) {

	function handleClick() {
		onCardClick(card);
	}
	const currentUser = React.useContext(CurrentUserContext);
	const isOwn = card.owner._id === currentUser._id;
	const isLiked = card.likes.some((i) =>
		i._id === currentUser._id);
	const cardLikeButtonClassName = (`elements__like ${isLiked ? 'elements__like_active' : ''}`
	);

	const cardDeleteButtonClassName = (
		`elements__delete ${isOwn ? '' : 'elements__delete_hidden'}`
	);

	return (
		<article className="elements__card-container">
			<div className={cardDeleteButtonClassName}>
			</div>
			<div className="elements__image-container">
				<img className="elements__image" alt={name} src={link} onClick={handleClick} />
			</div>
			<div className="elements__text-container">
				<p className="elements__text">{name}</p>
				<div className="elements__like-container">
					<div className={cardLikeButtonClassName}></div>
					<span className="elements__like-count">{likes.length}</span>
				</div>
			</div>
		</article>
	)
}

export default Card