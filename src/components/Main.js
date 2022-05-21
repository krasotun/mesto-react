
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


		</main>

	)
};
export default Main