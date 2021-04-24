import { ElementBuild } from '../components/constructor/elementBuild.js'

const root = document.querySelector('#root')

export class Loader {
	constructor() {
		this.loader = new ElementBuild()
			.parent(root)
			.tag('div')
			.options({ className: 'loader_wrapper', id: 'loader' })
			.children(
				new ElementBuild().tag('div').options({ className: 'loader_inner' })
			)
	}

	render() {
		this.loader.render()
	}

	remove() {
		document.querySelector('#loader').remove()
	}
}
