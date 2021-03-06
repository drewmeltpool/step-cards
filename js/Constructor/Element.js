export class Element {
	constructor() {
		this.item = null
	}

	parent(elem) {
		this.parent = elem
		return this
	}

	build() {
		return this.item
	}

	render(type = 'append') {
		this.parent[type](this.item)
		return this.item
	}

	appendChild(parent) {
		parent.append(this.item)
		return this.item
	}

	tag(tag) {
		this.item = document.createElement(tag)
		return this
	}

	css(styles) {
		for (const key in styles) {
			this.item.style[key] = styles[key]
		}
		return this
	}

	options(options) {
		for (const key in options) {
			if (key === 'dataset') {
				const { name, value } = options[key]
				this.item.dataset[name] = value
			} else {
				this.item[key] = options[key]
			}
		}
		return this
	}

	eventListener(type, cb) {
		this.item.addEventListener(type, cb)
		return this
	}

	children(...args) {
		args.forEach(child => {
			child.appendChild(this.item)
		})
		return this
	}
}
