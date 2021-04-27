// import { Doctor } from './Doctor.js'
// import { Form } from '../layouts/Form.js'
// import { getInputValue } from '../DOM/dom.js'

import { Api } from '../../api/api.js'
import { Form } from '../layouts/Form.js'

export class Visit {
	constructor() {
		this.visitGoal = null
		this.description = null
		this.urgency = null
		this.fullname = null
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
	form() {
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
				const api = new Api()
				api.setToken(localStorage.getItem('token'))
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
				const list = document.querySelector('.patient__list')
				const card = await api.addCard(data)
				const cards = localStorage.getItem('cards')
				const cardsParse = JSON.parse(cards)
				const ans = JSON.stringify([...JSON.parse(cards), card])
				localStorage.setItem('cards', ans)
				if (!cardsParse.length) {
					new Redirect(ControlPage()).redirect()
					return
				}
				new PatientItem(card).parent(list).render()
				document.querySelector('.modal-wrapper').remove()
				document.body.classList = ''
				loader.remove()
			})
			.build()
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
