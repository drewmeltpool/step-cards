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
	constructor(obj) {
		this.items = obj.options.map(option => {
			return new Element()
				.tag('li')
				.options({ className: 'dropdown__info', ...option })
		})

		this.list = new Element()
			.tag('ul')
			.options({ className: 'dropdown__menu', ...obj.menu })
			.children(...this.items)

		this.dropdown = new Element()
			.tag('div')
			.options({ className: 'dropdown', ...obj.dropdown })
			.children(
				obj.elem.eventListener('click', e => {
					const dropDownMenu = e.target
						.closest('.dropdown')
						.querySelector('.dropdown__menu')
					dropDownMenu.classList.toggle('dropdown__open')
				}),
			)
			.children(this.list)

		return this.build()
	}

	build() {
		return this.dropdown
	}
}
