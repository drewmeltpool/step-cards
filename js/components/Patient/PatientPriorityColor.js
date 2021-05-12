export class PatientPriorityColor {
	constructor() {
		this.colors = {
			high: 'rgba(228, 43, 43 , 1)',
			medium: 'rgba(250, 168, 0, 1)',
			low: 'rgba(0, 160, 51, 1)',
		}
	}

	getColor(name) {
		return this.colors[name] || '#fff'
	}
}
