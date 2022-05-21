import closeImagePath from "../images/close-icon.svg"

function ImagePopup(props) {
	return (
		<section class="popup-card popup">
			<div class="popup-card__container">
				<img src={closeImagePath} alt="Закрытие окна" className="popup__close" onClick={props.onClose} />
				<img src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
					class="popup-card__image" alt='Камчатка' />
				<p class="popup-card__text">Камчатка</p>
			</div>
		</section>


	)
};

export default ImagePopup;