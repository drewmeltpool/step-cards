import { List } from '../../layouts/List.js'
import { PatientItem } from './PatientItem.js'

export class PatientList {
	constructor(patients) {
		const data = patients.map(patient => new PatientItem(patient))
		return new List('patient__list', 'patient__card').elements(...data)
	}
}
