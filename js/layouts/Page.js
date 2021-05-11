import { Element } from '../Constructor/Element.js'

const root = document.querySelector('#root')

export class Page {
	constructor() {
		this.page = new Element().tag('div').parent(root)
	}

	section(item) {
		this.page.children(item)
		return this
	}

	build() {
		this.page.render()
	}
}
