import { Element } from '../../../components/Constructor/Element.js'
import { emptyList } from '../../../components/layouts/Info.js'
import { PatientList } from '../../../components/Patient/PatientList.js'

export class Content {
	constructor() {
		const data = localStorage.getItem('cards')
		const cards = data ? JSON.parse(data) : []
		const res = cards.length ? new PatientList().create(cards) : new emptyList()

		return new Element()
			.tag('main')
			.options({ className: 'main' })
			.children(
				new Element()
					.tag('div')
					.options({ className: 'container' })
					.children(res),
			)
	}
}
