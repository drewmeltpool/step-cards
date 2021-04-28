import { Api } from '../../api/api.js'
import { getInputValue } from '../DOM/dom.js'
import { Form } from '../layouts/Form.js'

export class EditForm {
	constructor(obj, id) {
		return new Form('Редактировать')
			.select(
				{ id: 'specialization' },
				{ textContent: 'Кардиолог', value: 'cardiologist' },
				{
					textContent: 'Терапевт',
					value: 'therapist',
				},
				{ textContent: 'Стоматолог', value: 'dentist' },
			)
			.select(
				{ id: 'priority' },
				{ textContent: 'Неотложная', value: 'high' },
				{
					textContent: 'Приоритетная',
					value: 'medium',
				},
				{ textContent: 'Обычная', value: 'low' },
			)
			.input({
				value: obj.patient,
				id: 'patient',
				type: 'text',
				placeholder: 'ФИО',
			})
			.input({
				value: obj.goal,
				id: 'goal',
				type: 'text',
				placeholder: 'Цель визита',
			})
			.input({
				value: obj.description,
				id: 'description',
				type: 'text',
				placeholder: 'описание визита',
			})
			.input({
				value: obj.date,
				id: 'lastDate',
				type: 'date',
				placeholder: 'Дата',
			})
			.input({
				value: obj.pressure,
				id: 'pressure',
				type: 'number',
				placeholder: 'Давление',
			})
			.input({
				value: obj.weight,
				id: 'weightindex',
				type: 'number',
				placeholder: 'Индекс массы тела',
			})
			.input({
				value: obj.heartDisease,
				id: 'heartDisease',
				type: 'text',
				placeholder: 'Перенесенные заболевания сердца',
			})
			.input({
				value: obj.age,
				id: 'age',
				type: 'number',
				placeholder: 'Возраст',
			})
			.button({ textContent: 'Применить' })
			.submit(async () => {
				const data = {
					doctor: '',
					specialization: getInputValue('#specialization'),
					doctor: getInputValue('#specialization'),
					goal: getInputValue('#goal'),
					description: getInputValue('#description'),
					priority: getInputValue('#priority'),
					patient: getInputValue('#patient'),
					date: getInputValue('#lastDate'),
					pressure: getInputValue('#pressure'),
					weight: getInputValue('#weightindex'),
					heartDisease: getInputValue('#heartDisease'),
					age: getInputValue('#age'),
				}
				const api = new Api()
				api.setToken(localStorage.getItem('token'))
				const card = await api.editCard(data, id)
				console.log(card)
			})
			.build()
	}
}
