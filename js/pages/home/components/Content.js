import { ElementBuild } from '../../../components/Constructor/elementBuild.js'

export class Content {
	constructor() {
		return new ElementBuild()
			.tag('main')
			.options({ className: 'main' })
			.children(
				new ElementBuild()
					.tag('div')
					.options({ className: 'login-error' })
					.children(
						new ElementBuild().tag('img').options({
							className: 'login-error__img',
							src: './assets/medicine.svg',
							alt: 'error_ing',
						})
					)
			)
	}
}
