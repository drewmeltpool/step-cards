import { Element } from '../Constructor/Element.js'
import { Button, Icon } from '../Constructor/Template.js'
import { Loader } from '../layouts/Loader.js'
import { Modal } from '../layouts/Modal.js'
import { DropDown } from '../layouts/DropDown.js'
import { Api } from '../../api/api.js'
import { Redirect } from '../../redirect/redirect.js'
import { ControlPage } from '../../pages/control/Cards.js'
import { PatientPriorityColor } from './PatientPriorityColor.js'
import { Form } from '../layouts/Form.js'
import { getInputValue } from '../DOM/dom.js'
import { PriorityList, DoctorList } from '../Doctor/MedInfo.js'
import { PatientList } from './PatientList.js'

const deleteModal = e =>
	new Modal()
		.title('Удалить карточку')
		.text('Вы точно хотите удалить эту карточку')
		.ok(async () => {
			const loader = new Loader()
			loader.render()
			const card = e.target.closest('.patient__card')
			const id = card.dataset.id
			new PatientList().delete(id)
			loader.remove()
		})
		.build()

export class PatientItem {
	create(obj) {
		const show = [obj.patient, obj.doctor?.name]

		const additionalInfo = Object.keys(obj)
			.filter(key => obj[key] && typeof obj[key] !== 'object')
			.map(key => `${key} : ${obj[key]}`)

		const data = show.map(value =>
			new Element().tag('p').options({
				className: 'patient-card__text',
				textContent: `${value ? value : 'Пусто'}`,
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
												[...new DoctorList()].find(
													item => item.value === obj.doctor.specialization,
												),
												...new DoctorList().filter(
													item => item.value !== obj.doctor.specialization,
												),
											)
											.select(
												{ id: 'priority' },
												[...new PriorityList()].find(
													item => item.value === obj.priority,
												),
												...new PriorityList().filter(
													item => item.value !== obj.priority,
												),
											)
											.input({
												value: obj.patient,
												id: 'fullname',
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
												id: 'date',
												value: obj.date,
												type: 'date',
												placeholder: 'Дата',
											})
											.input({
												value: obj.pressure,
												id: 'pressure',
												type: 'number',
												placeholder: 'Обычное давление',
											})
											.input({
												value: obj.bodyIndex,
												id: 'weightindex',
												type: 'number',
												placeholder: 'Индекс массы тела',
											})
											.input({
												value: obj.heartDisease || '',
												id: 'heartdisease',
												type: 'text',
												placeholder: 'Перенесенные заболевания С-С системы',
											})
											.input({
												value: obj.age,
												id: 'age',
												type: 'number',
												placeholder: 'Возраст',
											})
											.button({ textContent: 'Редактировать' })
											.submit(async () => {
												const loader = new Loader()
												loader.render()
												const name = [
													...document.querySelector('#doctor').children,
												].find(
													item =>
														item.value ===
														document.querySelector('#doctor').value,
												).textContent

												const data = {
													doctor: {
														name,
														specialization: getInputValue('#doctor'),
													},
													goal: getInputValue('#goal'),
													description: getInputValue('#description'),
													priority: getInputValue('#priority'),
													patient: getInputValue('#fullname'),
													date: getInputValue('#date'),
													pressure: getInputValue('#pressure'),
													weight: getInputValue('#weightindex'),
													heartDisease: getInputValue('#heartdisease'),
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
						new DropDown(
							new Icon('fas fa-chevron-down'),
							...additionalInfo,
						).build(),
					),
			)
	}
}
