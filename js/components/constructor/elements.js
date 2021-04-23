import { ElementBuild } from './elementBuild.js'

export class Button {
	constructor(className, textContent) {
		return (this.button = new ElementBuild()
			.tag('button')
			.options({ className: `btn ${className}`, textContent }))
	}
}

export class Logo {
	constructor() {
		return new ElementBuild()
			.tag('div')
			.options({ className: 'logo-wrapper' })
			.children(
				new ElementBuild()
					.tag('h1')
					.options({ className: 'logo', textContent: 'Medico' }),
				new ElementBuild().tag('img').options({
					className: 'logo__img',
					alt: 'heart',
					src: './assets/icons/heart.svg',
				})
			)
	}
}
