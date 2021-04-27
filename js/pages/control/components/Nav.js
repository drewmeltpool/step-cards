import { Redirect } from '../../../redirect/redirect.js'
import { HomePage } from '../../home/Home.js'
import { Modal } from '../../../components/layouts/Modal.js'
import { Element } from '../../../components/Constructor/element.js'
import {
	Nav,
	Button,
	Logo,
	Icon,
} from '../../../components/Constructor/Template.js'
import { AddVisit } from './AddVisit.js'

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
			new Element()
				.tag('ul')
				.options({ className: 'nav__list' })
				.children(
					new Element()
						.tag('li')
						.options({ className: 'nav__item' })
						.children(
							new Button('btn--default', 'New Card').eventListener(
								'click',
								() => {
									new Modal()
										.title('Добавить карточку')
										.elem(new AddVisit())
										.build()
								},
							),
						),
				)
				.children(
					new Element()
						.tag('li')
						.options({ className: 'nav__item' })
						.children(
							new Button('btn--icon')
								.children(new Icon('fas fa-sign-out-alt'))
								.eventListener('click', () => {
									localStorage.clear()
									new Redirect(HomePage()).redirect()
								}),
						),
				),
		)
	}
}
