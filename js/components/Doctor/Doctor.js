export class Doctor {
	constructor(type, doctor) {
		this.doctor = doctor
		this.type = type
	}
}

export class TherapistDoctor extends Doctor {
	constructor(doctor) {
		super('therapist', doctor)
	}
}

export class CardiologistDoctor extends Doctor {
	constructor(doctor) {
		super('cardioligist', doctor)
	}
}

export class DentistDoctor extends Doctor {
	constructor(doctor) {
		super('dentist', doctor)
	}
}
