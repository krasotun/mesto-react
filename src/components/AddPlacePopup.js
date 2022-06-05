import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
	return (
		<PopupWithForm
			name='add'
			title='Новое место'
			isOpen={isOpen}
			onClose={onClose}
			children={
				<>
					<fieldset className="form-add__input-container">
						<input required minLength="2" maxLength="40" className="form-add__item form__item" id="place" type="text"
							name="place" placeholder="Название" />
						<span className="form__error" id="place-error"></span>
						<input required className="form-add__item form__item" id="link" type="url" name="link"
							placeholder="Ссылка на картинку" />
						<span className="form__error" id="link-error"></span>
					</fieldset>
					<button type="submit" className="form-add__submit-button form__submit-button_inactive form__submit-button button">
						Создать
					</button>
				</>
			}
		/>
	)
}


export default AddPlacePopup;