import { getFormData, destroyModal, copyObject } from '../../DOM/dom.js'
import { Form } from '../../layouts/Form.js'
import { Loader } from '../../layouts/Loader.js'
import { VisitDentist, VisitTherapist, VisitCardiologist } from './Visit.js'
import { PatientList } from '../Patient/PatientList.js'
import { formUtils } from '../../utils/formData.js'

export class Dialog {
	constructor() {
		this.type = null
	}

	editForm(obj, id) {
		const copy = copyObject(this.form)
		copy.options = copy.options.map(item => {
			Object.keys(item).forEach(key => {
				const name = item[key].name
				const options = item[key].options
				if (name) {
					if (options) {
						item[key].options = [
							options.find(option => option.value === obj[name]),
							...options.filter(option => option.value !== obj[name]),
						]
					} else {
						item[key].value = obj[name]
					}
				}
			})
			return item
		})
		return new Form({
			id: this.type,
			...copy,
			button: { textContent: 'Редактировать карточку' },
			submit: async () => {
				const loader = new Loader()
				loader.render()
				console.log(getFormData(document.querySelector(`#${this.type}`)))
				const data = this.visit.create({
					...getFormData(document.querySelector(`#${this.type}`)),
				})
				console.log(data)
				new PatientList().edit(data, id)
				destroyModal()
				loader.remove()
			},
		})
	}

	createForm() {
		return new Form({
			id: this.type,
			...this.form,
			button: { textContent: 'Создать карточку' },
			submit: async () => {
				const loader = new Loader()
				loader.render()
				const data = this.visit.create(
					getFormData(document.querySelector(`#${this.type}`)),
				)
				await new PatientList().add(data)
				destroyModal()
				loader.remove()
			},
		})
	}
}

export class DialogTherapist extends Dialog {
	constructor() {
		super()
		this.type = 'therapist'
		this.form = formUtils.visitTherapist
		this.visit = new VisitTherapist()
	}
}

export class DialogCardiologist extends Dialog {
	constructor() {
		super()
		this.type = 'cardiologist'
		this.form = formUtils.visitCardiologist
		this.visit = new VisitCardiologist()
	}
}

export class DialogDentist extends Dialog {
	constructor() {
		super()
		this.type = 'dentist'
		this.form = formUtils.visitDentist
		this.visit = new VisitDentist()
	}
}

export const dialogs = [
	new DialogCardiologist(),
	new DialogTherapist(),
	new DialogDentist(),
]
