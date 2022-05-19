import logoPath from "./images/logo.svg"
import './App.css';

function App() {
	return (
		<div className="page__content">

			<header className="header">
				<img className="header__logo" src={logoPath} alt="Логотип" />
			</header>

			<main>
				<section className="profile">
					<div className="profile__content-container">
						<div className="profile__avatar-container">
							<img src="https://samcult.ru/wp-content/uploads/2021/01/johnny-rotten-1976-e1612102438221.jpg" alt="Аватар"
								className="profile__avatar" />
							<button className="profile__edit-avatar-button"></button>
						</div>
						<div className="profile__text-container">
							<h1 className="profile__title">Марат Ибрагимов</h1>
							<button className="profile__edit-button button"></button>
							<h2 className="profile__subtitle">Веб-разработчик</h2>
						</div>
					</div>
					<button className="profile__post-button button"></button>
				</section>
				<section className="elements">
				</section>
			</main>

			<footer className="footer">
				<p className="footer__text">© 2022 Mesto Russia</p>
			</footer>

		</div>
	);
}

export default App;
