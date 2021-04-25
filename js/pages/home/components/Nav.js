import { Nav } from '../../../components/layouts/Nav.js'
import { Button, Logo, List } from '../../../components/Constructor/Template.js'
import { Form } from '../../../components/layouts/Form.js'
import { Modal } from '../../../components/layouts/Modal.js'
import { Api } from '../../../api/api.js'
import { Redirect } from '../../../redirect/redirect.js'
import { ControlPage } from '../../../pages/control/controlPage.js'

const getCards = async () => {
	const api = new Api()
	const email = document.querySelector('#email').value
	const password = document.querySelector('#password').value
	await api.login(email, password)
	if (api.getToken()) {
		const cards = await api.getAllCard()
		localStorage.setItem('cards', JSON.stringify(cards))
		new Redirect(ControlPage()).redirect()
	} else {
		alert('Please, use correct email or password!')
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
								.input('email', 'email')
								.input('password', 'password')
								.button('Вход')
								.submit(async () => await getCards())
								.build()
						)
						.build()
				})
			)
		)
	}
}
