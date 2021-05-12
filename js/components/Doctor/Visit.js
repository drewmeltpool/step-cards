import { Doctor } from './Doctor.js'

export class Visit {
	constructor() {
		this.goal = null
		this.title = null
		this.priority = null
		this.patient = null
	}

	create(obj) {
		Object.keys(this).forEach(key => {
			if (!this[key]) {
				this[key] = obj[key] ? obj[key] : ''
			}
		})
		return this
	}
}

export class VisitCardiologist extends Visit {
	constructor() {
		const doctor = new Doctor('Кардиолог', 'cardiologist')
		super()
		this.pressure = null
		this.weight = null
		this.heartDisease = null
		this.age = null
		this.doctor = doctor.name
		this.specialization = doctor.specialization
	}
}

export class VisitDentist extends Visit {
	constructor() {
		const doctor = new Doctor('Стоматолог', 'dentist')
		super()
		this.date = null
		this.doctor = doctor.name
		this.specialization = doctor.specialization
	}
}

export class VisitTherapist extends Visit {
	constructor() {
		const doctor = new Doctor('Терапевт', 'therapist')
		super()
		this.age = null
		this.doctor = doctor.name
		this.specialization = doctor.specialization
	}
}
