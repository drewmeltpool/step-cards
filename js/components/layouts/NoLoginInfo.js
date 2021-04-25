import { Element } from '../Constructor/Element.js'

export class NoLogin {
	constructor() {
		return new Element()
			.tag('div')
			.options({ className: 'info' })
			.children(
				new Element().tag('img').options({
					className: 'info__img',
					src: './assets/medicine.svg',
					alt: 'error_img',
				})
			)
	}
}
