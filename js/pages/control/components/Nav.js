import { Redirect } from '../../../redirect.js'
import { HomePage } from '../../home/Home.js'
import { Modal } from '../../../layouts/Modal.js'
import { Element } from '../../../Constructor/Element.js'
import { Nav, Button, Logo, Icon } from '../../../Constructor/Template.js'
import { AddVisit } from './AddVisit.js'
import { DropDown } from '../../../layouts/DropDown.js'

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
							new Button({ className: 'btn btn--icon' })
								.children(
									new Icon('fas fa-plus'),
									new Element()
										.tag('span')
										.options({ className: 'text', textContent: 'Создать' }),
								)
								.eventListener('click', () => {
									new Modal({
										title: { textContent: 'Добавить карточку' },
										content: new AddVisit(),
									})
								}),
						),
				)
				.children(
					new Element()
						.tag('li')
						.options({ className: 'nav__item' })
						.children(
							new DropDown({
								dropdown: {
									className: 'dropdown user__dropdown',
									title: localStorage.getItem('email'),
								},
								menu: { className: 'dropdown__menu user-dropdown__menu' },
								elem: new Button({ className: 'btn btn--icon' }).children(
									new Icon('fas fa-user'),
									new Element()
										.tag('span')
										.options({ className: 'text', textContent: 'Аккаунт' }),
								),
								options: [{ textContent: localStorage.getItem('email') }],
							}),
						),
				)
				.children(
					new Element()
						.tag('li')
						.options({ className: 'nav__item' })
						.children(
							new Button({ className: 'btn btn--icon' })
								.children(
									new Icon('fas fa-sign-out-alt'),
									new Element()
										.tag('span')
										.options({ className: 'text', textContent: 'Выход' }),
								)

								.eventListener('click', () => {
									new Modal({
										title: { textContent: localStorage.getItem('email') },
										content: new Element().tag('p').options({
											className: 'modal__text',
											textContent: 'Вы точно хотите выйти?',
										}),
										ok: () => {
											localStorage.clear()
											new Redirect(HomePage()).redirect()
										},
									})
								}),
						),
				),
		)
	}
}
