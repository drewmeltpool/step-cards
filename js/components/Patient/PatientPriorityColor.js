export class PatientPriorityColor {
	constructor() {
		this.colors = {
			high: 'rgba(228, 43, 43 , 0.9)',
			medium: '#faa800',
			low: 'rgba(0,160,51)',
		}
	}

	getColor(name) {
		return this.colors[name] || '#333'
	}
}
