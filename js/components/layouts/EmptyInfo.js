import { Element } from '../Constructor/Element.js'

export class emptyList {
	constructor() {
		return new Element()
			.tag('div')
			.options({ className: 'info' })
			.children(
				new Element().tag('img').options({
					className: 'info__img',
					src: './assets/empty.svg',
					alt: 'error_img',
				})
			)
	}
}
