import { getInputValue } from '../DOM/dom.js'
import { Form } from '../layouts/Form.js'
import { Loader } from '../../components/layouts/Loader.js'
import { PatientItem } from '../../components/Patient/PatientItem.js'
import { DentistForm } from '../Form/DentistForm.js'
import { VisitDentist } from './Visit.js'

export class VisitForm {
	constructor(type) {
		this.type = type
	}

	create() {
		const type = this.type
		switch (type) {
			case 'dentist': {
				return new DentistForm()
			}
			case 'therapist': {
				return new Form('Терапевт')
					.input({ id: 'goal', type: 'text', placeholder: 'Цель визита' })
					.textArea({
						id: 'description',
					})
					.select(
						{ id: 'priority' },
						{ textContent: 'Срочность', disabled: true },
						{ value: 'low', textContent: 'обычная' },
						{ value: 'medium', textContent: 'приоритетная' },
						{ value: 'high', textContent: 'неотложная' },
					)
					.input({ id: 'fullname', type: 'text', placeholder: 'ФИО' })
					.input({ id: 'age', type: 'text', placeholder: 'Возраст' })
					.button({ textContent: 'Создать карточку' })
					.submit(async () => {
						const loader = new Loader()
						loader.render()
						const data = {
							doctor: 'Терапевт',
							specialization: 'therapist',
							goal: getInputValue('#goal'),
							description: getInputValue('#description'),
							priority: getInputValue('#priority'),
							patient: getInputValue('#fullname'),
							age: getInputValue('#age'),
						}
						await new PatientItem().add(data)
						document.querySelector('.modal-wrapper').remove()
						document.body.classList = ''
						loader.remove()
					})
					.build()
			}
			case 'cardiologist': {
				return new Form('Кардиолог')
					.input({ id: 'goal', type: 'text', placeholder: 'Цель визита' })
					.textArea({
						id: 'description',
					})
					.select(
						{ id: 'priority' },
						{ textContent: 'Срочность', disabled: true },
						{ value: 'low', textContent: 'обычная' },
						{ value: 'medium', textContent: 'приоритетная' },
						{ value: 'high', textContent: 'неотложная' },
					)
					.input({ id: 'fullname', type: 'text', placeholder: 'ФИО' })
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
					.input({ id: 'age', type: 'text', placeholder: 'Возраст' })
					.button({ textContent: 'Создать карточку' })
					.submit(async () => {
						const loader = new Loader()
						loader.render()
						const data = {
							doctor: 'Кардиолог',
							specialization: 'cardiologist',
							goal: getInputValue('#goal'),
							description: getInputValue('#description'),
							priority: getInputValue('#priority'),
							patient: getInputValue('#fullname'),
							heart: getInputValue('#heartdisease'),
							pressure: getInputValue('#pressure'),
							weight: getInputValue('#weightindex'),
						}

						await new PatientItem().add(data)
						document.querySelector('.modal-wrapper').remove()
						document.body.classList = ''
						loader.remove()
					})
					.build()
			}
			default:
				return new Form('Врач').build()
		}
	}
}
