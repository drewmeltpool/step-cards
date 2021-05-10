import { Element } from './Element.js'

export class Button {
	constructor(obj) {
		return new Element().tag('button').options(obj)
	}
}

export class TextArea {
	constructor(obj) {
		return new Element().tag('textarea').options(obj)
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
				new Icon('fas fa-heartbeat'),
			)
	}
}

export class Nav {
	constructor(...elems) {
		return new Element()
			.tag('nav')
			.options({ className: 'nav' })
			.children(
				new Element()
					.tag('div')
					.options({ className: 'nav__inner-wrapper container' })
					.children(...elems),
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

export class Header {
	constructor(...items) {
		this.header = new Element().tag('header').options({ className: 'hero' })
		items.forEach(item => this.header.children(item))
		return this.header
	}
}

export class Footer {
	constructor() {
		return new Element()
			.tag('footer')
			.options({ className: 'footer' })
			.children(
				new Element()
					.tag('div')
					.options({ className: 'container' })
					.children(
						new Element().tag('p').options({
							className: 'text',
							textContent: '© copyright 2021',
						}),
					),
			)
	}
}
