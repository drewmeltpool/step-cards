import { ElementBuild } from '../../../components/Constructor/elementBuild.js'
import { emptyList } from '../../../layouts/EmptyInfo.js'
import { PatientList } from '../../../components/Patient/PatientList.js'

export class Content {
	constructor(cards) {
		const res = cards.length ? new PatientList(cards) : new emptyList()

		return new ElementBuild()
			.tag('main')
			.options({ className: 'main' })
			.children(
				new ElementBuild()
					.tag('div')
					.options({ className: 'container' })
					.children(res)
			)
	}
}
