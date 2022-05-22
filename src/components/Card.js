function Card(props) {

	function handleClick() {
		props.onCardClick(props.card);
		console.log(props.card);
	}

	return (
		<article className="elements__card-container">
			<div className="elements__delete">
			</div>
			<div className="elements__image-container">
				<img className="elements__image" alt={props.name} src={props.link} onClick={handleClick} />
			</div>
			<div className="elements__text-container">
				<p className="elements__text">{props.name}</p>
				<div className="elements__like-container">
					<div className="elements__like"></div>
					<span className="elements__like-count">{props.likes.length}</span>
				</div>
			</div>
		</article>
	)
}

export default Card