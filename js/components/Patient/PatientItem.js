import { Element } from '../Constructor/Element.js'
import { Button, Icon } from '../Constructor/Template.js'
import { Loader } from '../layouts/Loader.js'
import { Modal } from '../layouts/Modal.js'
import { DropDown } from '../layouts/DropDown.js'
import { Api } from '../../api/api.js'
import { ControlPage } from '../../pages/control/controlPage.js'
import { Redirect } from '../../redirect/redirect.js'
import { Form } from '../layouts/Form.js'

// description: 'Новое описание визита',
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

export class PatientItem {
	constructor(obj) {
		const show = ['patient', 'id']
		const info = [
			'description',
			'title',
			'lastDate',
			'heartDisease',
			'bp',
			'weight',
			'age',
		]
		const additionlInfo = info.map(key => `${key}: ${obj[key]}`)

		const data = show.map(key =>
			new Element().tag('p').options({ textContent: `${key}: ${obj[key]}` })
		)

		return [
			new Element()
				.tag('div')
				.options({ className: 'patient-card__options' })
				.children(
					new Button('btn--icon')
						.eventListener('click', e => {
							const id = e.target.closest('.patient__card').dataset.id
							new Modal().title('Редактировать ' + id).build()
						})
						.children(new Icon('fas fa-edit'))
				)
				.children(
					new Button('btn--icon')
						.eventListener('click', async e => {
							new Modal()
								.title('Удалить карточку')
								.text('Вы точно хотите удалить эту карточку')
								.ok(async () => {
									const api = new Api()
									api.setToken(localStorage.getItem('token'))
									const card = e.target.closest('.patient__card')
									const loader = new Loader()
									loader.render()
									await api.removeCard(card.dataset.id)
									const cards = await api.getAllCard()
									localStorage.setItem('cards', JSON.stringify(cards))
									loader.remove()
									new Redirect(ControlPage()).redirect()
								})
								.build()
						})
						.children(new Icon('fas fa-trash'))
				),
			new Element()
				.tag('div')
				.options({ className: 'patient-card__content' })
				.children(...data),
			new Element()
				.tag('div')
				.options({ className: 'patient-card__options' })
				// .children(new DropDown('1', ...additionlInfo)),
		]
	}
}
