import closeImagePath from "../images/close-icon.svg"

function handleEditAvatarClick() {
	const popupEditAvatar = document.querySelector('.popup-edit-avatar');
	popupEditAvatar.classList.add('popup_opened');
}

function handleEditProfileClick() {
	const popupEdit = document.querySelector('.popup-edit');
	popupEdit.classList.add('popup_opened');
}


function handleAddPlaceClick() {
	const popupAdd = document.querySelector('.popup-add');
	popupAdd.classList.add('popup_opened');
}




function Main() {
	return (
		<main>
			<section className="profile">
				<div className="profile__content-container">
					<div className="profile__avatar-container">
						<img src="https://samcult.ru/wp-content/uploads/2021/01/johnny-rotten-1976-e1612102438221.jpg" alt="Аватар"
							className="profile__avatar" />
						<button className="profile__edit-avatar-button" onClick={handleEditAvatarClick}></button>
					</div>
					<div className="profile__text-container">
						<h1 className="profile__title">Марат Ибрагимов</h1>
						<button className="profile__edit-button button" onClick={handleEditProfileClick}></button>
						<h2 className="profile__subtitle">Веб-разработчик</h2>
					</div>
				</div>
				<button className="profile__post-button button" onClick={handleAddPlaceClick}></button>
			</section>
			<section className="elements">
			</section>


			<section className="popup-edit popup">
				<div className="popup-edit__container">
					<img src={closeImagePath} alt="Закрытие окна" className="popup-edit__close popup__close" />
					<form className="popup-edit__form form-edit form" method="POST" novalidate>
						<h2 className="form-edit__title">Редактировать профиль</h2>
						<fieldset className="form-edit__input-container">
							<input minlength="2" maxlength="40" required className="form-edit__item form__item" id="name" type="text"
								name="name" placeholder="Введите имя" />
							<span className="form__error" id="name-error"></span>
							<input minlength="2" maxlength="200" required className="form-edit__item form__item" id="about" type="text"
								name="about" placeholder="Укажите профессию" />
							<span className="form__error" id="about-error"></span>
						</fieldset>
						<button type="submit" className="form-edit__submit-button form__submit-button button">
							Сохранить
						</button>
					</form>
				</div>
			</section>

			<section className="popup-confirm popup">
				<div className="popup-confirm__container">
					<img src={closeImagePath} alt="Закрытие окна"
						className="popup-confirm__close popup__close" />
					<form className="popup-confirm__form form-confirm form" novalidate>
						<h2 className="form-confirm__title">Вы уверены?</h2>
						<button type="submit" className="form-confirm__submit-button form__submit-button button">
							Да
						</button>
					</form>
				</div>
			</section>

			<section className="popup-add popup">
				<div className="popup-add__container">
					<img src={closeImagePath} alt="Закрытие окна" className="popup-add__close popup__close" />
					<form className="popup-add__form form-add form" method="POST" novalidate>
						<h2 className="form-add__title">Новое место</h2>
						<fieldset className="form-add__input-container">
							<input required minlength="2" maxlength="40" className="form-add__item form__item" id="place" type="text"
								name="place" placeholder="Название" />
							<span className="form__error" id="place-error"></span>
							<input required className="form-add__item form__item" id="link" type="url" name="link"
								placeholder="Ссылка на картинку" />
							<span className="form__error" id="link-error"></span>
						</fieldset>
						<button type="submit" className="form-add__submit-button form__submit-button_inactive form__submit-button button">
							Создать
						</button>
					</form>
				</div>
			</section>


			<section className="popup-edit-avatar popup">
				<div className="popup-edit-avatar__container">
					<img src={closeImagePath} alt="Закрытие окна"
						className="popup-edit-avatar__close popup__close" />
					<form className="popup-edit-avatar__form form-edit-avatar form" method="POST" novalidate>
						<h2 className="form-edit-avatar__title">Обновить аватар</h2>
						<fieldset className="form-edit-avatar__input-container">
							<input required className="form-edit-avatar form__item" id="avatar" type="url" name="avatar"
								placeholder="Ссылка на новый аватар" />
							<span className="form__error" id="avatar-error"></span>
						</fieldset>
						<button type="submit" className="form-edit-avatar__submit-button  form__submit-button button">
							Сохранить
						</button>
					</form>
				</div>
			</section>

			<section className="popup-card popup">
				<div className="popup-card__container">
					<img src={closeImagePath} alt="Закрытие окна" className="popup-card__close popup__close" />
					<img src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' alt='Камчатка'
						className="popup-card__image" />
					<p className="popup-card__text">Камчатка</p>
				</div>
			</section>
		</main>

	)
};
export default Main