import { Form } from '../layouts/Form.js'

export class VisitForm {
	constructor(visit) {
		this.visit = visit
	}

	create() {
		const { type } = this.visit
		switch (type) {
			case 'dentist': {
				return new Form()
			}
			case 'therapist': {
				return 'body'
			}
			case 'cardiologist': {
				return 'heart'
			}
			default:
				return 'visit'
		}
	}
}
