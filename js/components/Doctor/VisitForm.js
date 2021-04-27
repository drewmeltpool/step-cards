import { getInputValue } from '../DOM/dom.js'
import { Form } from '../layouts/Form.js'
import { Api } from '../../api/api.js'
import { Loader } from '../../components/layouts/Loader.js'
import { PatientItem } from '../../components/Patient/PatientItem.js'
import { Redirect } from '../../redirect/redirect.js'
import { ControlPage } from '../../pages/control/controlPage.js'
import { VisitDentist } from './Visit.js'

// 	description: 'Новое описание визита',
// 	title: 'Визит к кардиологу',
// 	priority: 1,
// 	patient: 'ivan ivanov ivanovich',
// 	doctor: 'john sena ivanovich',
// 	specialization: 'Cardiologist',
// 	lastDate: '2017-01-01',
// 	heartDisease: true,
// 	bp: '24',
// 	weight: 70,
// 	age: 23,

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
					.textArea({
						id: 'desription',
						placeholder: 'Описание визита',
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
					.input({ id: 'date', type: 'date', placeholder: 'Дата' })
					.button('Создать карточку')
					.submit(async () => {
						const loader = new Loader()
						loader.render()
						const api = new Api()
						api.setToken(localStorage.getItem('token'))
						const data = {
							specialization: 'Cardiologist',
							title: 'Визит к кардиологу',
							doctor: 'Кардиолог',
							goal: getInputValue('#goal'),
							description: getInputValue('#desription'),
							priority: getInputValue('#priority'),
							age: getInputValue('#age'),
							patient: getInputValue('#fullname'),
							date: getInputValue('#date'),
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
			case 'therapist': {
				return new Form('Терапевт').build()
			}
			case 'cardiologist': {
				return new Form('Кардиолог').build()
			}
			default:
				return new Form('Врач').build()
		}
	}
}
