import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
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

	function handleUpdateUser(data) {
		api.setUserInfo(data)
			.then((data) =>
				setCurrentUser(data))
			.catch((r) =>
				console.log(r))
		closeAllPopups();
	}

	function handleUpdateAvatar(link) {
		api.updateAvatar(link)
			.then((data) => {
				setCurrentUser(data);
			})
			.catch((r) => {
				console.log(r);
			})
		closeAllPopups();
	}

	function handleCardLike(card) {
		const isLiked = card.likes.some((i) =>
			i._id === currentUser._id);
		api.changeLikeCardStatus(card._id, isLiked)
			.then((newCard) => {
				setCards((state) =>
					state.map((c) => c._id === card._id ? newCard : c));
			}).catch((r) => {
				console.log(r);
			});
	}

	function handleCardDelete(card) {
		api.deleteCard(card._id)
			.catch((r) => {
				console.log(r);
			})
		const filteredCards = cards.filter(filteredCard => filteredCard !== card)
		setCards(filteredCards);
	}

	function closeAllPopups() {
		setEditAvatarPopupState(false)
		setEditProfilePopupState(false)
		setAddPlacePopupState(false)
		setSelectedCard(false)
	}

	const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState(false);
	const [currentUser, setCurrentUser] = React.useState({ name: "", description: "", avatar: '' });
	const [cards, setCards] = React.useState([]);


	React.useEffect(() => {
		api.getUserInfo()
			.then((data) => {
				setCurrentUser(data);
			}).catch((r) => {
				console.log(r);
			})
	}, [])

	React.useEffect(() => {
		api.getInitialCards()
			.then((data) => {
				setCards(data)
			}).catch((r) => {
				console.log(r);
			})
	}, [])


	return (

		<div className="page__content">
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					cards={cards}
					onCardClick={handleCardClick}
					onCardLike={handleCardLike}
					onCardDelete={handleCardDelete}
					onEditAvatar={handleEditAvatarClick}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
				/>
				<Footer />
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				<PopupWithForm
					name='confirm'
					title='Вы уверены?'
					children={
						<button type="submit" className="form-confirm__submit-button form__submit-button button">
							Да
						</button>
					}
				/>

				<PopupWithForm
					name='add'
					title='Новое место'
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
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


				<ImagePopup
					card={selectedCard}
					onClose={closeAllPopups}
				/>
			</CurrentUserContext.Provider>
		</div>

	);
}

export default App;
