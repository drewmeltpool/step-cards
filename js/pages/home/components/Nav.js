import {
	Nav,
	Button,
	Logo,
	List,
} from '../../../components/Constructor/Template.js'
import { Form } from '../../../components/layouts/Form.js'
import { Modal } from '../../../components/layouts/Modal.js'
import { Api } from '../../../api/api.js'
import { Redirect } from '../../../redirect/redirect.js'
import { ControlPage } from '../../../pages/control/controlPage.js'
import { Loader } from '../../../components/layouts/Loader.js'

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
	} else {
		new Modal()
			.title('Ошибка')
			.text('Please, use correct email or password!')
			.ok(() => {})
			.build()
		loader.remove()
	}
}

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button('btn--default', 'Log in').eventListener('click', () => {
					new Modal()
						.title('Логин')
						.elem(
							new Form()
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
								.button('Вход')
								.submit(async () => await getCards())
								.build(),
						)
						.build()
				}),
			),
		)
	}
}
