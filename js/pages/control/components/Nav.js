import { ElementBuild } from '../../../components/Constructor/elementBuild.js'
import { Nav } from '../../../layouts/Nav.js'
import { List } from '../../../layouts/list.js'
import { Button, Logo, Icon } from '../../../components/Constructor/elements.js'
import { Redirect } from '../../../redirect/redirect.js'
import { HomePage } from '../../home/homePage.js'
import { Api } from '../../../api/api.js'

const card = {
	description: 'Новое описание визита',
	title: 'Визит к кардиологу',
	priority: 'low',
	patient: 'ivan ivanov ivanovich',
	doctor: 'john sena ivanovich',
	specialization: 'Cardiologist',
	lastDate: '2017-01-01',
	heartDisease: true,
	bp: '24',
	weight: 70,
	age: 23,
}

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button('btn--default', 'New Card').eventListener(
					'click',
					async () => {
						const api = new Api()
						await api.login(
							localStorage.getItem('email'),
							localStorage.getItem('password')
						)
						const newCard = await api.addCard(card)
						const allCard = await api.getAllCard()
						console.log(allCard)
					}
				),
				new Button('btn--icon')
					.children(new Icon('fas fa-sign-out-alt'))
					.eventListener('click', () => {
						new Redirect(HomePage).redirect()
						localStorage.clear()
					})
			)
		)
	}
}
