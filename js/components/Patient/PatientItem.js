import { Element } from '../Constructor/Element.js'
import { Button, Icon } from '../Constructor/Template.js'
import { Loader } from '../layouts/Loader.js'
import { Modal } from '../layouts/Modal.js'
import { DropDownBootstrap } from '../layouts/DropDown.js'
import { Api } from '../../api/api.js'
import { Redirect } from '../../redirect/redirect.js'
import { ControlPage } from '../../pages/control/Cards.js'
import { PatientPriorityColor } from './PatientPriorityColor.js'
import { Form } from '../layouts/Form.js'
import { getInputValue } from '../DOM/dom.js'
import { Priority } from '../../components/Doctor/Priority.js'

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
	create(obj) {
		const show = [obj.patient, obj.doctor.name]
		const info = [
			obj.pressure,
			obj.weight,
			obj.description,
			obj.lastVisit,
			obj.goal,
			obj.priority,
			obj.doctor.specialization,
			obj.age,
			obj.heartDisease,
		]
		const additionalInfo = info.map(
			value => `${value ? value : 'Свойство не указано'}`,
		)
		const data = show.map(value =>
			new Element().tag('p').options({
				className: 'patient-card__text',
				textContent: `${value ? value : 'Свойство не указано'}`,
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
												[...new Priority()].find(
													item => item.value === obj.priority,
												),
												...new Priority().filter(
													item => item.value !== obj.priority,
												),
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
												const loader = new Loader()
												loader.render()
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
												await api.editCard(data, id)
												localStorage.setItem(
													'cards',
													JSON.stringify(await api.getAllCard()),
												)
												new Redirect(ControlPage()).redirect()
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
	async add(data) {
		const api = new Api()
		api.setToken(localStorage.getItem('token'))
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
		this.create(data).parent(list).render()
	}
}
