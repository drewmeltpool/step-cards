import { Element } from '../../../components/Constructor/Element.js'

export class Main {
	constructor(item) {
		return new Element()
			.tag('main')
			.options({ className: 'main' })
			.children(item)
	}
}
