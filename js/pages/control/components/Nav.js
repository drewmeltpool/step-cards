import { Nav } from '../../../layouts/Nav.js'
import { List } from '../../../layouts/list.js'
import { Button, Logo } from '../../../components/constructor/elements.js'
import { Api } from '../../../api/Api.js'
import { Redirect } from '../../../redirect/redirect.js'
import { HomePage } from '../../home/homePage.js'

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button('btn--default', 'New Card').eventListener(
					'click',
					async () => {
						const email = 'drewmelt132@gmail.com'
						const password = '5529245'
						const api = new Api()
						await api.login(email, password)

						const cards = await api.getAllCard()
						console.log(cards)
					}
				),
				new Button('btn--default', 'Log Out').eventListener('click', () => {
					new Redirect(HomePage).redirect()
					localStorage.clear()
				})
			)
		)
	}
}
