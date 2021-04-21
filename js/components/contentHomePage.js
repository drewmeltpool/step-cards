import { ElementBuild } from '../components/constructor/elementBuild.js'

export const ContentHomePage = new ElementBuild()
	.tag('main')
	.options({ className: 'main' })
	.children(
		new ElementBuild()
			.tag('section')
			.options({ className: 'login-error' })
			.children(
				new ElementBuild().tag('img').options({
					className: 'login-error__img',
					src: './assets/medicine.svg',
					alt: 'error_ing',
				})
			)
	)
