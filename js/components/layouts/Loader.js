import { Element } from '../Constructor/Element.js'

const root = document.querySelector('#root')

export class Loader {
	constructor() {
		this.loader = new Element()
			.parent(root)
			.tag('div')
			.options({ className: 'loader_wrapper', id: 'loader' })
			.children(new Element().tag('div').options({ className: 'loader_inner' }))
	}

	render() {
		this.loader.render()
	}

	remove() {
		document.querySelector('#loader').remove()
	}
}
