import { ElementBuild } from '../../components/Constructor/elementBuild.js'
import { PatientItem } from './PatientItem.js'

export class PatientList {
	constructor(data) {
		const patientElements = data.map(patient => new PatientItem(patient))
		const patients = patientElements.map((item, index) =>
			new ElementBuild()
				.tag('div')
				.options({
					className: 'patient__card',
					dataset: { name: 'id', value: data[index].id },
				})
				.children(...item)
		)
		return new ElementBuild()
			.tag('div')
			.options({ className: 'patient__list' })
			.children(...patients)
			.eventListener('change', () => console.log('kek'))
	}
}
