import { ElementBuild } from './elementBuild.js'

export class Button {
	constructor(className = '', textContent = '') {
		return new ElementBuild()
			.tag('button')
			.options({ className: `btn ${className}`, textContent })
	}
}

export class Icon {
	constructor(className) {
		return new ElementBuild().tag('i').options({ className })
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
				new ElementBuild().tag('i').options({ className: 'fas fa-heartbeat' })
			)
	}
}
