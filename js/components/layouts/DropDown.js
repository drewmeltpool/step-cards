import { Element } from '../Constructor/Element.js'

export class DropDown {
	constructor(obj) {
		this.select = new Element().tag('select').options(obj)
	}

	option(obj) {
		this.select.children(new Element().tag('option').options(obj))
		return this
	}

	options(arr) {
		arr.forEach(item => {
			this.select.children(new Element().tag('option').options(item))
		})
		return this
	}

	build() {
		return this.select
	}
}

export class DropDownBootstrap {
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
