import { Element } from '../Constructor/Element.js'

export class DropDown {
	constructor(obj) {
		this.select = new Element().tag('select').options(obj)
	}

	option(obj) {
		this.select.children(new Element().tag('option').options(obj))
		return this
	}

	build() {
		return this.select
	}
}
