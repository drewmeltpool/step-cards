import { Element } from '../Constructor/Element.js'

export class DropDown {
	constructor() {
		this.select = new Element().tag('select').options({ className: 'select' })
	}

	option(value, textContent) {
		this.select.children(
			new Element()
				.tag('option')
				.options({ className: 'select__option', value, textContent })
		)
		return this
	}

	build() {
		return this.select
	}
}
