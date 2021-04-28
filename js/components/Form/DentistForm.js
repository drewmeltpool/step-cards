import { getInputValue } from '../../components/DOM/dom.js'
import { Form } from '../../components/layouts/Form.js'
import { Loader } from '../../components/layouts/Loader.js'
import { Api } from '../../api/api.js'
import { PatientItem } from '../../components/Patient/PatientItem.js'

export class DentistForm {
	constructor() {
		return new Form('Стоматолог')
			.input({ id: 'goal', type: 'text', placeholder: 'Цель визита' })
			.textArea({ id: 'desсription' })
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
				const api = new Api()
				api.setToken(localStorage.getItem('token'))
				const data = {
					doctor: 'Стоматлог',
					specialization: 'dentist',
					goal: getInputValue('#goal'),
					description: getInputValue('#desсription'),
					priority: getInputValue('#priority'),
					patient: getInputValue('#fullname'),
					date: getInputValue('#date'),
				}
				const card = await api.addCard(data)
				await new PatientItem().add(card)
				document.querySelector('.modal-wrapper').remove()
				document.body.classList = ''
				loader.remove()
			})
			.build()
	}
}
