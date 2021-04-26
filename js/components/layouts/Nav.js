import { Element } from '../Constructor/Element.js'

export class Nav {
	constructor(...elems) {
		return new Element()
			.tag('nav')
			.options({ className: 'nav' })
			.children(
				new Element()
					.tag('div')
					.options({ className: 'nav__inner-wrapper container' })
					.children(...elems)
			)
	}
}
