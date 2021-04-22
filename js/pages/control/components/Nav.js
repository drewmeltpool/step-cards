import { Nav } from '../../../layouts/Nav.js'
import { List } from '../../../layouts/list.js'
import { Button, Logo } from '../../../components/Constructor/elements.js'
import { Redirect } from '../../../redirect/redirect.js'
import { HomePage } from '../../home/homePage.js'

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button('btn--default', 'New Card').eventListener('click', () => {
					alert('Need Form')
				}),
				new Button('btn--default', 'Log Out').eventListener('click', () => {
					new Redirect(HomePage).redirect()
					localStorage.clear()
				})
			)
		)
	}
}
