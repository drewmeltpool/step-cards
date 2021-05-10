import { Nav, Button, Logo, List } from '../../../Constructor/Template.js'
import { Form } from '../../../layouts/Form.js'
import { Modal } from '../../../layouts/Modal.js'
import { Loader } from '../../..//layouts/Loader.js'
import { Api } from '../../../api.js'
import { Redirect } from '../../../redirect.js'
import { ControlPage } from '../../control/Cards.js'

const getCards = async () => {
	const loader = new Loader()
	const api = new Api()
	const email = document.querySelector('#email').value
	const password = document.querySelector('#password').value
	loader.render()
	await api.login(email, password)
	if (api.getToken()) {
		const cards = await api.getAllCard()
		localStorage.setItem('cards', JSON.stringify(cards))
		new Redirect(ControlPage()).redirect()
		return
	}
	new Modal()
		.title('Ошибка')
		.text('Неправильный логин или пароль')
		.ok(() => {})
		.build()
	loader.remove()
}

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button('btn--default', 'Войти').eventListener('click', () => {
					new Modal()
						.title('Логин')
						.elem(
							new Form('Логин')
								.input({
									type: 'email',
									id: 'email',
									placeholder: 'Введите почту',
								})
								.input({
									type: 'password',
									id: 'password',
									placeholder: 'Введите пароль',
								})
								.button({ textContent: 'Вход' })
								.submit(async () => await getCards())
								.build(),
						)
						.build()
				}),
			),
		)
	}
}
