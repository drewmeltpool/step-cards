import { ElementBuild } from '../components/Constructor/elementBuild.js'

const root = document.querySelector('#root')

export class Page {
	constructor() {
		return new ElementBuild().tag('div').parent(root)
	}
}
