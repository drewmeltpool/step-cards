import { Doctor } from './Doctor.js'

export class Visit {
	constructor(obj) {
		this.goal = obj.goal || ''
		this.description = obj.description || ''
		this.priority = obj.priority || ''
		this.patient = obj.patient || ''
	}
}

export class VisitCardiologist extends Visit {
	constructor(obj) {
		const doctor = new Doctor('Кардиолог', 'cardiologist')
		super(obj)
		this.pressure = obj.pressure || ''
		this.weight = obj.weight || ''
		this.heartDisease = obj.heartDisease || ''
		this.age = obj.age || ''
		this.doctor = doctor.name
		this.specialization = doctor.specialization
	}
}

export class VisitDentist extends Visit {
	constructor(obj) {
		const doctor = new Doctor('Стоматолог', 'dentist')
		super(obj)
		this.date = obj.date || ''
		this.doctor = doctor.name
		this.specialization = doctor.specialization
	}
}

export class VisitTherapist extends Visit {
	constructor(obj) {
		const doctor = new Doctor('Терапевт', 'therapist')
		super(obj)
		this.age = obj.age || ''
		this.doctor = doctor.name
		this.specialization = doctor.specialization
	}
}
