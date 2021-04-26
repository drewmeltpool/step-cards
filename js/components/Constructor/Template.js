import { Element } from './Element.js'

export class Button {
	constructor(className = '', textContent = '') {
		return new Element()
			.tag('button')
			.options({ className: `btn ${className}`, textContent })
	}
}

export class Icon {
	constructor(className) {
		return new Element().tag('i').options({ className })
	}
}

export class Logo {
	constructor() {
		return new Element()
			.tag('div')
			.options({ className: 'logo-wrapper' })
			.children(
				new Element()
					.tag('h1')
					.options({ className: 'logo', textContent: 'Medico' }),
				new Icon('fas fa-heartbeat')
			)
	}
}

export class List {
	constructor(listClass, childClass) {
		this.listClass = listClass
		this.childClass = childClass
		this.list = new Element().tag('ul').options({ className: this.listClass })
	}

	elements(...items) {
		items.forEach(item => {
			const listItem = new Element().tag('li').options({
				className: this.childClass,
			})
			listItem.children(item)
			this.list.children(listItem)
		})

		return this.list
	}

	build() {
		return this.list
	}
}
