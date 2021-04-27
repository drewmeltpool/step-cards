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

export class DropDownBootstrap {
	constructor(title, ...items) {
		this.items = items.map(item => {
			return new ElementBuild().tag('li').children(
				new ElementBuild().tag('button').options({
					className: 'dropdown-item',
					textContent: item,
				}),
			)
		})
		this.list = new ElementBuild()
			.tag('ul')
			.options({ className: 'dropdown-menu' })
			.children(...this.items)
			.eventListener('click', () => {})
		this.dropdown = new ElementBuild()
			.tag('div')
			.options({ className: 'btn-group' })
			.children(
				new ElementBuild().tag('button').options({
					type: 'button',
					className: 'btn btn-primary dropdown-toggle',
					dataset: { name: 'bsToggle', value: 'dropdown' },
					textContent: title,
				}),
			)
			.children(this.list)
	}

	render() {
		this.dropdown.render()
	}
}
