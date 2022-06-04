import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {

	return (
		<PopupWithForm
			name='edit'
			title='Редактировать профиль'
			isOpen={isOpen}
			onClose={onClose}
			children={
				<>
					<fieldset className="form-edit__input-container">
						<input minLength="2" maxLength="40" required className="form-edit__item form__item" id="name" type="text"
							name="name" placeholder="Введите имя" />
						<span className="form__error" id="name-error"></span>
						<input minLength="2" maxLength="200" required className="form-edit__item form__item" id="about" type="text"
							name="about" placeholder="Укажите профессию" />
						<span className="form__error" id="about-error"></span>
					</fieldset>
					<button type="submit" className="form-edit__submit-button form__submit-button button">
						Сохранить
					</button>
				</>
			}
		/>
	)
}

export default EditProfilePopup;