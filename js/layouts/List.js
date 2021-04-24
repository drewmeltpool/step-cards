import { ElementBuild } from '../components/Constructor/elementBuild.js'

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
			} else {
				listItem.children(item)
			}
			this.list.children(listItem)
		})

		return this.list
	}
}
