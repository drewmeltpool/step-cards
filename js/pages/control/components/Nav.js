import { Redirect } from '../../../redirect.js'
import { HomePage } from '../../home/Home.js'
import { Modal } from '../../../layouts/Modal.js'
import { Element } from '../../../Constructor/Element.js'
import { Nav, Button, Logo, Icon } from '../../../Constructor/Template.js'
import { AddVisit } from './AddVisit.js'

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
							new Button('btn--icon')
								.children(new Icon('fas fa-plus'))
								.eventListener('click', () => {
									new Modal()
										.title('Добавить карточку')
										.elem(new AddVisit())
										.build()
								}),
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
									new Modal()
										.title(localStorage.getItem('email'))
										.text('Вы точно хотите выйти?')
										.ok(() => {
											localStorage.clear()
											new Redirect(HomePage()).redirect()
										})
										.build()
								}),
						),
				),
		)
	}
}
