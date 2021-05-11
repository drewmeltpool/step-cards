import { getInputValue, getFormData, destroyModal } from '../../DOM/dom.js'
import { Form } from '../../layouts/Form.js'
import { Loader } from '../../layouts/Loader.js'
import { VisitDentist, VisitTherapist, VisitCardiologist } from './Visit.js'
import { PatientList } from '../Patient/PatientList.js'
import { formUtils } from '../../utils/formData.js'

export class Dialog {
	constructor() {
		this.type = null
	}

	edit() {
		throw new Error(`Edit is not implemented`)
	}

	form() {
		throw new Error(`Form is not implemented`)
	}
}

export class DialogTherapist extends Dialog {
	constructor() {
		super()
		this.type = 'therapist'
	}
	form() {
		return new Form({
			id: 'therapist',
			...formUtils.visitTherapist,
			submit: async () => {
				const loader = new Loader()
				loader.render()
				const data = new VisitTherapist(
					getFormData(document.querySelector('#therapist')),
				)
				await new PatientList().add(data)
				destroyModal()
				loader.remove()
			},
		})
	}
}

export class DialogCardiologist extends Dialog {
	constructor() {
		super()
		this.type = 'cardiologist'
	}
	edit() {
		console.log('cardiologist')
	}
	form() {
		return new Form({
			id: 'cardiolog',
			...formUtils.visitCardiologist,
			submit: async () => {
				const loader = new Loader()
				loader.render()
				const data = new VisitCardiologist(
					getFormData(document.querySelector('#cardiolog')),
				)
				await new PatientList().add(data)
				destroyModal()
				loader.remove()
			},
		})
	}
}

export class DialogDentist extends Dialog {
	constructor() {
		super()
		this.type = 'dentist'
	}
	form() {
		return new Form({
			id: 'dentist',
			...formUtils.visitDentist,
			submit: async () => {
				const loader = new Loader()
				loader.render()
				const data = new VisitDentist(
					getFormData(document.querySelector('#dentist')),
				)
				await new PatientList().add(data)
				destroyModal()
				loader.remove()
			},
		})
	}
}

export const dialogs = [
	new DialogDentist(),
	new DialogCardiologist(),
	new DialogTherapist(),
]
