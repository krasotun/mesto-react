import React from "react"
import { api } from "../utils/api";


function Main(props) {

	const [userName, setUserName] = React.useState('Марат Ибрагимов');
	const [userDescription, setUserDescription] = React.useState('Веб-разработчик');
	const [userAvatar, setUserAvatar] = React.useState('https://www.m24.ru/b/d/nBkSUhL2jVghkceyPqzZvc62gYT28pj22yHFh_fH_nKUPXuaDyXTjHou4MVO6BCVoZKf9GqVe5Q_CPawk214LyWK9G1N5ho=6JaKLum5hY9EHmEeKsZ8Gw.jpg');

	React.useEffect(() => {
		api.getUserInfo()
			.then((data) => {
				setUserName(data.name);
				setUserDescription(data.about);
				setUserAvatar(data.avatar);
			}).catch((r) => {
				console.log(r);
			})
	}, [])



	return (
		<main>
			<section className="profile">
				<div className="profile__content-container">
					<div className="profile__avatar-container">
						<img src={userAvatar} alt="Аватар"
							className="profile__avatar" />
						<button className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
					</div>
					<div className="profile__text-container">
						<h1 className="profile__title">{userName}</h1>
						<button className="profile__edit-button button" onClick={props.onEditProfile}></button>
						<h2 className="profile__subtitle">{userDescription}</h2>
					</div>
				</div>
				<button className="profile__post-button button" onClick={props.onAddPlace}></button>
			</section>
			<section className="elements">
			</section>
		</main>

	)
};
export default Main