import closeImagePath from "../images/close-icon.svg"

function PopupWithForm(props) {
	return (
		<section className={`popup-${props.name} popup`}>
			<div className="popup__container">
				<img src={closeImagePath} alt="Закрытие окна" className="popup__close" />
				<form className={`form-${props.name} form`}>
					<h2 className={`form-${props.name}__title`}>{props.title}</h2>
					{props.children}
				</form>
			</div>
		</section>
	)
}

export default PopupWithForm;