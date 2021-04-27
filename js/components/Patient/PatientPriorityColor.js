export class PatientPriorityColor {
	constructor() {
		this.colors = {
			high: '#cc0000',
			medium: '#faa800',
			low: '#007e33',
		}
	}

	getColor(name) {
		return this.colors[name] || '#333'
	}
}
