// import { Doctor } from './Doctor.js'
// import { Form } from '../layouts/Form.js'
// import { getInputValue } from '../DOM/dom.js'

import { Api } from '../../api/api.js'

export class Visit {
	constructor() {
		this.visitGoal = visitGoal
		this.description = description
		this.urgency = urgency
		this.fullname = fullname
		this.type = 'visit'
	}
	create() {}
}

export class VisitCardiologist extends Visit {
	constructor(
		visitGoal,
		description,
		urgency,
		fullname,
		pressure,
		weight,
		heartDisease,
		age,
	) {
		super(visitGoal, description, urgency, fullname)
		this.pressure = pressure
		this.weight = weight
		this.heartDisease = heartDisease
		this.age = age
		this.type = 'cardiologist'
	}
	type() {
		return this.type
	}
}

export class VisitDentist extends Visit {
	constructor(visitGoal, description, urgency, fullName, lastVisit) {
		super(visitGoal, description, urgency, fullName)
		this.lastVisit = lastVisit
		this.type = 'dentist'
	}
}

export class VisitTherapist extends Visit {
	constructor(age, visitGoal, description, urgency, fullName) {
		super(visitGoal, description, urgency, fullName)
		this.age = age
		this.type = 'therapist'
	}
}

export class CreateVisit {
	constructor(visit) {
		this.visit = visit
	}

	async create() {
		const api = new Api()
		api.setToken(localStorage.getItem('token'))
		await api.addCard(this.visit)
	}
}
