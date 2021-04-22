import { ElementBuild } from '../../../components/Constructor/elementBuild.js'
import { emptyList } from '../../../layouts/NoItems.js'

export class Content {
	constructor(cards) {
		const res = cards.length
			? new ElementBuild().tag('div').options({
					className: 'card__list',
					textContent: JSON.stringify(cards),
			  })
			: new emptyList()

		return new ElementBuild()
			.tag('main')
			.options({ className: 'main' })
			.children(res)
	}
}
