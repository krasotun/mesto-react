import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {

	function handleEditAvatarClick() {
		setEditAvatarPopupState(true)
	}
	function handleEditProfileClick() {
		setEditProfilePopupState(true)
	}
	function handleAddPlaceClick() {
		setAddPlacePopupState(true)
	}
	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function closeAllPopups() {
		setEditAvatarPopupState(false)
		setEditProfilePopupState(false)
		setAddPlacePopupState(false)
		setSelectedCard({ name: '', link: '' })
	}

	const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

	return (
		<div className="page__content">
			<Header />
			<Main
				onCardClick={handleCardClick}
				onEditAvatar={handleEditAvatarClick}
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
			/>
			<Footer />

			<PopupWithForm
				name='edit'
				title='Редактировать профиль'
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
				submitButtonText="Сохранить"
			>
				<fieldset className="form-edit__input-container">
					<input minLength="2" maxLength="40" required className="form-edit__item form__item" id="name" type="text"
						name="name" placeholder="Введите имя" />
					<span className="form__error" id="name-error"></span>
					<input minLength="2" maxLength="200" required className="form-edit__item form__item" id="about" type="text"
						name="about" placeholder="Укажите профессию" />
					<span className="form__error" id="about-error"></span>
				</fieldset>
			</PopupWithForm>

			<PopupWithForm
				name='confirm'
				title='Вы уверены?'
				submitButtonText="Да"
			/>

			<PopupWithForm
				name='add'
				title='Новое место'
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
				submitButtonText="Создать"
			>
				<fieldset className="form-add__input-container">
					<input required minLength="2" maxLength="40" className="form-add__item form__item" id="place" type="text"
						name="place" placeholder="Название" />
					<span className="form__error" id="place-error"></span>
					<input required className="form-add__item form__item" id="link" type="url" name="link"
						placeholder="Ссылка на картинку" />
					<span className="form__error" id="link-error"></span>
				</fieldset>

			</PopupWithForm>

			<PopupWithForm
				name='edit-avatar'
				title='Обновить аватар'
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
				submitButtonText="Сохранить"
			>
				<fieldset className="form-edit-avatar__input-container">
					<input required className="form-edit-avatar form__item" id="avatar" type="url" name="avatar"
						placeholder="Ссылка на новый аватар" />
					<span className="form__error" id="avatar-error"></span>
				</fieldset>
			</PopupWithForm>
			<ImagePopup
				card={selectedCard}
				onClose={closeAllPopups}
			/>
		</div>
	);
}

export default App;
