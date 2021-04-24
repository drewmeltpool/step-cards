import { ElementBuild } from '../components/Constructor/elementBuild.js'

const root = document.querySelector('#root')

export class Page {
	constructor() {
		this.page = new ElementBuild().tag('div').parent(root)
	}

	section(item) {
		this.page.children(item)
		return this
	}

	build() {
		return this.page.render()
	}

	reload() {
		console.log('reload')
	}
}
