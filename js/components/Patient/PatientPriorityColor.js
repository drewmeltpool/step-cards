export class PatientPriorityColor {
	constructor() {
		this.colors = {
			high: 'rgba(228, 43, 43 , 0.9)',
			medium: 'rgba(250, 168, 0, 0.9)',
			low: 'rgba(0, 160, 51, 0.9)',
		}
	}

	getColor(name) {
		return this.colors[name] || '#fff'
	}
}
