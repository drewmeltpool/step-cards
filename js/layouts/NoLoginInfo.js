import { ElementBuild } from '../components/Constructor/elementBuild.js'

export class NoLogin {
	constructor() {
		return new ElementBuild()
			.tag('div')
			.options({ className: 'info' })
			.children(
				new ElementBuild().tag('img').options({
					className: 'info__img',
					src: './assets/medicine.svg',
					alt: 'error_img',
				})
			)
	}
}
