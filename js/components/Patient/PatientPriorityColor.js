export class PatientPriorityColor {
	constructor() {
		this.colors = {
			high: '#dc3545',
			medium: '#ffb340',
			low: '#198754',
		}
	}

	getColor(name) {
		return this.colors[name] || '#fff'
	}
}
