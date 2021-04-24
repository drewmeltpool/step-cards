import { ElementBuild } from './elementBuild.js'

export class Button {
	constructor(className = '', textContent = '') {
		return new ElementBuild()
			.tag('button')
			.options({ className: `btn ${className}`, textContent })
	}
}

export class Icon {
	constructor(className) {
		return new ElementBuild().tag('i').options({ className })
	}
}

export class Logo {
	constructor() {
		return new ElementBuild()
			.tag('div')
			.options({ className: 'logo-wrapper' })
			.children(
				new ElementBuild()
					.tag('h1')
					.options({ className: 'logo', textContent: 'Medico' }),
				new ElementBuild().tag('i').options({ className: 'fas fa-heartbeat' })
			)
	}
}

export class List {
	constructor(listClass, childClass) {
		this.listClass = listClass
		this.childClass = childClass
		this.list = new ElementBuild()
			.tag('ul')
			.options({ className: this.listClass })
	}

	elements(...items) {
		items.forEach(item => {
			const listItem = new ElementBuild().tag('li').options({
				className: this.childClass,
			})
			if (typeof item === 'string') {
				listItem.options({ textContent: item })
			} else if (Array.isArray(item)) {
				listItem.children(...item)
			} else {
				listItem.children(item)
			}
			this.list.children(listItem)
		})

		return this.list
	}
}
