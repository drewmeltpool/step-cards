import { Element } from '../Constructor/Element.js'
import { Button, Icon } from '../Constructor/Template.js'
import { Loader } from '../layouts/Loader.js'
import { Modal } from '../layouts/Modal.js'
import { DropDown, DropDownBootstrap } from '../layouts/DropDown.js'
import { Api } from '../../api/api.js'
import { Redirect } from '../../redirect/redirect.js'
import { ControlPage } from '../../pages/control/Cards.js'
import { PatientPriorityColor } from './PatientPriorityColor.js'
import { Form } from '../layouts/Form.js'
import { getInputValue } from '../DOM/dom.js'

const deleteModal = e =>
	new Modal()
		.title('Удалить карточку')
		.text('Вы точно хотите удалить эту карточку')
		.ok(async () => {
			const loader = new Loader()
			const api = new Api()
			loader.render()
			api.setToken(localStorage.getItem('token'))
			const card = e.target.closest('.patient__card')
			const id = card.dataset.id
			await api.removeCard(id)
			const ind = JSON.parse(localStorage.getItem('cards')).findIndex(
				item => item.id === id,
			)
			console.log(ind)
			const cards = JSON.parse(localStorage.getItem('cards'))
			cards.splice(ind, 1)
			localStorage.setItem('cards', JSON.stringify(cards))
			if (!cards.length) {
				new Redirect(ControlPage()).redirect()
				return
			}
			loader.remove()
			card.remove()
		})
		.build()

export class PatientItem {
	constructor(obj) {
		const show = ['patient', 'doctor']
		const info = [
			'description',
			'lastDate',
			'heartDisease',
			'pressure',
			'weight',
			'age',
			'goal',
			'priority',
			'specialization',
			'status',
		]
		const additionalInfo = info.map(
			key => `${key}: ${obj[key] ? obj[key] : 'Свойство не указано'}`,
		)
		const data = show.map(key =>
			new Element().tag('p').options({
				className: 'patient-card__text',
				textContent: `${key}: ${obj[key]}`,
			}),
		)
		return new Element()
			.tag('div')
			.options({
				className: 'patient__card',
				dataset: { name: 'id', value: obj.id },
			})
			.children(
				new Element()
					.tag('div')
					.css({
						backgroundColor: new PatientPriorityColor().getColor(obj.priority),
					})
					.options({ className: 'patient-card__header' })
					.children(
						new Button('btn--priority')
							.eventListener('click', async e => {
								deleteModal(e)
							})
							.children(new Icon('fas fa-times-circle')),
					),
				new Element()
					.tag('div')
					.options({ className: 'patient-card__content' })
					.children(...data),
				new Element()
					.tag('div')
					.options({ className: 'patient-card__footer' })
					.children(
						new Button('btn--option')
							.eventListener('click', e => {
								const id = e.target.closest('.patient__card').dataset.id
								new Modal()
									.title(`Редактировать ${id}`)
									.elem(
										new Form('Редактировать карточку')
											.select(
												{ id: 'doctor' },
												{ textContent: 'Кардиолог', value: 'Кардиолог' },
												{
													textContent: 'Терапевт',
													value: 'Терапевт',
												},
												{ textContent: 'Дантист', value: 'Дантист' },
											)
											.input({
												id: 'fullname',
												type: 'text',
												placeholder: 'ФИО',
											})
											.input({
												id: 'goal',
												type: 'text',
												placeholder: 'Цель визита',
											})
											.input({
												id: 'desription',
												type: 'text',
												placeholder: 'описание визита',
											})
											.input({ id: 'date', type: 'date', placeholder: 'Дата' })
											.input({
												id: 'pressure',
												type: 'number',
												placeholder: 'Давление',
											})
											.input({
												id: 'index',
												type: 'number',
												placeholder: 'Индекс массы тела',
											})
											.input({
												id: 'diseases',
												type: 'text',
												placeholder: 'Перенесенные заболевания сердца',
											})
											.input({
												id: 'age',
												type: 'number',
												placeholder: 'Возраст',
											})
											.select(
												{ id: 'priority' },
												{ textContent: 'Обычная', value: 'low' },
												{
													textContent: 'Приоритетная',
													value: 'medium',
												},
												{ textContent: 'Неотложная', value: 'high' },
											)
											.button({ textContent: 'Редактировать' })
											.submit(async () => {
												const data = {
													doctor: getInputValue('#doctor'),
													goal: getInputValue('#goal'),
													description: getInputValue('#desription'),
													priority: getInputValue('#priority'),
													patient: getInputValue('#fullname'),
													date: getInputValue('#date'),
													pressure: getInputValue('#pressure'),
													bodyIndex: getInputValue('#index'),
													heartDisease: getInputValue('#diseases'),
													age: getInputValue('#age'),
												}
												const api = new Api()
												const card = await api.editCard(data, id)
											})
											.build(),
									)
									.build()
							})
							.children(new Icon('fas fa-pen')),
					)
					.children(
						new Button('btn--option')
							.eventListener('click', e => deleteModal(e))
							.children(new Icon('fa fa-trash')),
					)
					.children(
						new DropDownBootstrap(
							new Icon('fas fa-chevron-down'),
							...additionalInfo,
						).build(),
					),
			)
	}
}
