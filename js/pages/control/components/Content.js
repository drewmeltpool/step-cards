import { Element } from '../../../components/Constructor/Element.js'
import { emptyList } from '../../../components/layouts/EmptyInfo.js'
import { PatientList } from '../../../components/Patient/PatientList.js'

export class Content {
	constructor() {
		const data = localStorage.getItem('cards')
		const cards = data ? JSON.parse(data) : []
		const res = cards.length ? new PatientList(cards) : new emptyList()

		return new Element()
			.tag('main')
			.css({ backgroundColor: '#f2f2f2' })
			.options({ className: 'main' })
			.children(
				new Element()
					.tag('div')
					.options({ className: 'container' })
					.children(res)
			)
	}
}
