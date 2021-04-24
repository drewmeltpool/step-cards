import { Nav } from '../../../layouts/Nav.js'
import { Button, Logo, List } from '../../../components/constructor/elements.js'
import { Form } from '../../../layouts/Form.js'
import { Modal } from '../../../layouts/Modal.js'
import { Api } from '../../../api/api.js'
import { Redirect } from '../../../redirect/redirect.js'
import { ControlPage } from '../../../pages/control/controlPage.js'

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button('btn--default', 'Log in').eventListener('click', () => {
					new Modal(
						'Welcome',
						new Form()
							.input('email', 'email')
							.input('password', 'password')
							.button('Submit')
							.submit(async e => {
								e.preventDefault()
								const api = new Api()
								await api.login(
									document.querySelector('#email').value,
									document.querySelector('#password').value
								)
								if (api.getToken()) {
									const cards = await api.getAllCard()
									localStorage.setItem(
										'email',
										document.querySelector('#email').value
									)
									localStorage.setItem(
										'password',
										document.querySelector('#password').value
									)
									new Redirect(ControlPage(cards)).redirect()
								} else {
									alert('Please, use correct email or password!')
								}
							})
							.build()
					).build()
				})
			)
		)
	}
}
