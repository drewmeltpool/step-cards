import { Element } from '../Constructor/Element.js'
import { Button, Icon } from '../Constructor/Template.js'

export class DropDown {
	constructor(title, ...items) {
		this.items = items.map(item =>
			new Element()
				.tag('li')
				.options({ className: 'dropdown__item', textContent: item })
		)

		this.list = new Element()
			.tag('ul')
			.options({ className: 'dropdown__menu' })
			.children(...this.items)

		return (this.dropdown = new Element()
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
