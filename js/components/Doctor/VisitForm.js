import { getInputValue } from '../DOM/dom.js'
import { Form } from '../layouts/Form.js'
import { Loader } from '../../components/layouts/Loader.js'
import { VisitDentist, VisitTherapist, VisitCardiologist } from './Visit.js'
import { PatientItem } from '../../components/Patient/PatientItem.js'
import { Priority } from './Priority.js'

export class VisitForm {
	constructor(type) {
		this.type = type
	}

	create() {
		const type = this.type
		switch (type) {
			case 'dentist': {
				return new Form('Стоматолог')
					.input({ id: 'goal', type: 'text', placeholder: 'Цель визита' })
					.select({ id: 'priority' }, ...new Priority())
					.input({ id: 'fullname', type: 'text', placeholder: 'ФИО' })
					.input({
						id: 'lastVisit',
						type: 'date',
						placeholder: 'Дата последнего визита',
					})
					.textArea({ id: 'desсription' })
					.button({ textContent: 'Создать карточку' })
					.submit(async () => {
						const loader = new Loader()
						loader.render()
						const data = new VisitDentist({
							goal: getInputValue('#goal'),
							description: getInputValue('#desсription'),
							priority: getInputValue('#priority'),
							patient: getInputValue('#fullname'),
							lastVisit: getInputValue('#lastVisit'),
						})
						new PatientItem().add(data)
						if (document.querySelector('.modal-wrapper')) {
							document.querySelector('.modal-wrapper').remove()
							document.body.classList = ''
							loader.remove()
						}
					})
					.build()
			}
			case 'therapist': {
				return new Form('Терапевт')
					.input({ id: 'goal', type: 'text', placeholder: 'Цель визита' })
					.select({ id: 'priority' }, ...new Priority())
					.input({ id: 'fullname', type: 'text', placeholder: 'ФИО' })
					.input({ id: 'age', type: 'text', placeholder: 'Возраст' })
					.textArea({
						id: 'description',
					})
					.button({ textContent: 'Создать карточку' })
					.submit(async () => {
						const loader = new Loader()
						loader.render()
						const data = new VisitTherapist({
							goal: getInputValue('#goal'),
							description: getInputValue('#description'),
							priority: getInputValue('#priority'),
							patient: getInputValue('#fullname'),
							age: getInputValue('#age'),
						})
						new PatientItem().add(data)
						if (document.querySelector('.modal-wrapper')) {
							document.querySelector('.modal-wrapper').remove()
							document.body.classList = ''
							loader.remove()
						}
					})
					.build()
			}
			case 'cardiologist': {
				return new Form('Кардиолог')
					.input({ id: 'goal', type: 'text', placeholder: 'Цель визита' })
					.select({ id: 'priority' }, ...new Priority())
					.input({ id: 'age', type: 'text', placeholder: 'Возраст' })
					.input({
						id: 'pressure',
						type: 'text',
						placeholder: 'Обычное давление',
					})
					.input({
						id: 'weightindex',
						type: 'text',
						placeholder: 'Индекс массы тела',
					})
					.input({
						id: 'heartdisease',
						type: 'text',
						placeholder: 'Перенесенные заболевания С-С системы',
					})
					.input({ id: 'fullname', type: 'text', placeholder: 'ФИО' })
					.textArea({
						id: 'description',
					})
					.button({ textContent: 'Создать карточку' })
					.submit(async () => {
						const loader = new Loader()
						loader.render()
						const data = new VisitCardiologist({
							goal: getInputValue('#goal'),
							description: getInputValue('#description'),
							priority: getInputValue('#priority'),
							patient: getInputValue('#fullname'),
							heartDisease: getInputValue('#heartdisease'),
							pressure: getInputValue('#pressure'),
							weight: getInputValue('#weightindex'),
						})
						new PatientItem().add(data)
						if (document.querySelector('.modal-wrapper')) {
							document.querySelector('.modal-wrapper').remove()
							document.body.classList = ''
							loader.remove()
						}
					})
					.build()
			}
			default:
				return new Form('Врач').build()
		}
	}
}
