import { ElementBuild } from '../../../components/Constructor/elementBuild.js'

export class Content {
	constructor(cards) {
		return new ElementBuild()
			.tag('main')
			.options({ className: 'main' })
			.children(
				new ElementBuild().tag('div').options({
					className: 'card__list',
					textContent: JSON.stringify(cards),
				})
			)
	}
}
