export class Visit {
	constructor() {
		this.visitGoal = null
		this.description = null
		this.urgency = null
		this.patient = null
		this.type = 'visit'
	}
	create() {}
}

export class VisitCardiologist extends Visit {
	constructor() {
		super()
		this.pressure = null
		this.weight = null
		this.heartDisease = null
		this.age = null
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
