import { ElementBuild } from '../components/constructor/elementBuild.js'
import { Button, Icon } from '../components/constructor/elements.js'

export class DropDown {
	constructor(title, ...items) {
		this.items = items.map(item =>
			new ElementBuild()
				.tag('li')
				.options({ className: 'dropdown__item' })
				.children(new Button('dropdown__info', item))
		)

		this.list = new ElementBuild()
			.tag('ul')
			.options({ className: 'dropdown__menu' })
			.children(...this.items)

		return (this.dropdown = new ElementBuild()
			.tag('div')
			.options({ className: 'dropdown' })
			.children(
				new Button('dropdown__title', title).children(
					new Icon('fas fa-chevron-down')
				)
			)
			.eventListener('click', e => {
				const dropdown = e.target.closest('.dropdown')
				const dropMenu = dropdown.querySelector('.dropdown__menu')
				dropMenu.classList.toggle('dropdown__open')
			})
			.children(this.list))
	}
}
