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
		super(obj)
		this.pressure = obj.pressure || ''
		this.weight = obj.weight || ''
		this.heartDisease = obj.heartDisease || ''
		this.age = obj.age || ''
		this.doctor = new Doctor('Кардиолог', 'cardiologist')
	}
}

export class VisitDentist extends Visit {
	constructor(obj) {
		super(obj)
		this.lastVisit = obj.lastVisit || ''
		this.doctor = new Doctor('Дантист', 'dentist')
	}
}

export class VisitTherapist extends Visit {
	constructor(obj) {
		super(obj)
		this.age = obj.age || ''
		this.doctor = new Doctor('Терапевт', 'therapist')
	}
}
