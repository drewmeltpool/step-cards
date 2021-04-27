import { Element } from '../Constructor/Element.js'
import { PatientItem } from './PatientItem.js'

export class PatientList {
	constructor(data) {
		const patients = data.map(patient => new PatientItem(patient))
		return new Element()
			.tag('div')
			.options({ className: 'patient__list' })
			.children(...patients)
	}
}
