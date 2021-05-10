import { Element } from '../Constructor/Element.js'
import { ignoreKey } from '../DOM/dom.js'

export class Select {
	constructor(obj) {
		return new Element()
			.tag('select')
			.options(ignoreKey(obj, 'options'))
			.children(...this.items(obj.options))
	}

	items(arr) {
		return arr.map(item => new Element().tag('option').options(item))
	}
}

export class DropDown {
	constructor(elem, ...items) {
		this.items = items.map(item => {
			return new Element()
				.tag('li')
				.options({ className: 'dropdown__info', textContent: item })
		})
		this.list = new Element()
			.tag('ul')
			.options({ className: 'dropdown__menu' })
			.children(...this.items)
			.eventListener('click', () => {})
		this.dropdown = new Element()
			.tag('div')
			.options({ className: 'dropdown' })
			.children(
				new Element()
					.tag('button')
					.options({
						className: 'btn btn--option',
					})
					.children(elem)
					.eventListener('click', e => {
						const dropDownMenu = e.target
							.closest('.dropdown')
							.querySelector('.dropdown__menu')
						dropDownMenu.classList.toggle('dropdown__open')
					}),
			)
			.children(this.list)
	}

	build() {
		return this.dropdown
	}
}
