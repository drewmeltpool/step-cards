import { getInputValue } from '../DOM/dom.js'
import { Form } from '../layouts/Form.js'
import { Api } from '../../api/api.js'
import { Loader } from '../../components/layouts/Loader.js'
import { Redirect } from '../../redirect/redirect.js'
import { ControlPage } from '../../pages/control/Cards.js'
import { VisitDentist } from './Visit.js'
import { PatientItem } from '../../components/Patient/PatientItem.js'

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
					.textArea({ id: 'description' })
					.select(
						{ id: 'priority' },
						{ textContent: 'Срочность', disabled: true },
						{ value: 'low', textContent: 'обычная' },
						{ value: 'medium', textContent: 'приоритетная' },
						{ value: 'high', textContent: 'неотложная' },
					)
					.input({ id: 'fullname', type: 'text', placeholder: 'ФИО' })
					.input({
						id: 'date',
						type: 'date',
						placeholder: 'Дата последнего визита',
					})
					.button({ textContent: 'Создать карточку' })
					.submit(async () => {
						const loader = new Loader()
						loader.render()
						const data = {
							doctor: 'Стоматолог',
							specialization: 'dentist',
							goal: getInputValue('#goal'),
							description: getInputValue('#description'),
							priority: getInputValue('#priority'),
							patient: getInputValue('#fullname'),
							date: getInputValue('#date'),
						}
						await new PatientItem().add(data)
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
					.textArea({
						id: 'description'
					})
					.select(
						{ id: 'priority' },
						{ textContent: 'Срочность', disabled: true },
						{ value: 'low', textContent: 'обычная' },
						{ value: 'medium', textContent: 'приоритетная' },
						{ value: 'high', textContent: 'неотложная' },
					)
					.input({ id: 'fullname', type: 'text', placeholder: 'ФИО' })
					.input({ id: 'age', type: 'number', placeholder: 'Возраст' })
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
					.textArea({
						id: 'description'
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
						type: 'number',
						placeholder: 'Обычное давление',
					})
					.input({
						id: 'weightindex',
						type: 'number',
						placeholder: 'Индекс массы тела',
					})
					.input({
						id: 'heartdisease',
						type: 'text',
						placeholder: 'Перенесенные заболевания С-С системы',
					})
					.input({ id: 'age', type: 'number', placeholder: 'Возраст' })
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
