import { Nav } from '../../../layouts/Nav.js'
import { List } from '../../../layouts/list.js'
import { Button, Logo } from '../../../components/constructor/elements.js'
import { ControlPage } from '../../control/controlPage.js'
import { Redirect } from '../../../redirect/redirect.js'
import { loginForm } from '../../../components/loginform.js'

import { Modal } from '../../../layouts/Modal.js'

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button('btn--default', 'Log in').eventListener('click', () => {
					new Modal(loginForm.build()).render()
					localStorage.setItem('login', true)
				})
			)
		)
	}
}
