export class PatientPriorityColor {
	constructor() {
		this.colors = {
			high: '#cc0000',
			medium: '#faa800',
			low: 'rgba(0,160,51)',
		}
	}

	getColor(name) {
		return this.colors[name] || '#333'
	}
}
