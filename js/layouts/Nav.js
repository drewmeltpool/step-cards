import { ElementBuild } from '../components/constructor/elementBuild.js'

export class Nav {
	constructor(...elems) {
		return new ElementBuild()
			.tag('nav')
			.options({ className: 'nav' })
			.children(
				new ElementBuild()
					.tag('div')
					.options({ className: 'nav__inner-wrapper container' })
					.children(...elems)
			)
	}
}
