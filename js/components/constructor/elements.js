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
			.tag('h1')
			.options({ className: 'logo', textContent: 'Medico' })
			.children(
				new ElementBuild().tag('i').options({ className: 'fa fa-heartbeat' })
			)
	}
}