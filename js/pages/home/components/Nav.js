import { Nav } from '../../../layouts/Nav.js'
import { List } from '../../../layouts/list.js'
import { Button, Logo } from '../../../components/Constructor/elements.js'
import { loginForm } from '../../../components/loginform.js'

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button('btn--default', 'Log in').eventListener('click', () => {
					loginForm.render()
				})
			)
		)
	}
}
