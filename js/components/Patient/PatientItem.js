import { ElementBuild } from '../../components/Constructor/elementBuild.js'
import { Button, Icon } from '../../components/Constructor/elements.js'
import { Modal } from '../../layouts/Modal.js'
import { DropDown } from '../../layouts/DropDown.js'
import { Api } from '../../api/api.js'
import { ControlPage } from '../../pages/control/controlPage.js'
import { Redirect } from '../../redirect/redirect.js'
import { Form } from '../../layouts/Form.js'

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
		const show = ['doctor', 'patient']
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
			new ElementBuild()
				.tag('p')
				.options({ textContent: `${key}: ${obj[key]}` })
		)
		return [
			new ElementBuild()
				.tag('div')
				.options({ className: 'patient-card__options' })
				.children(
					new Button('btn--icon')
						.eventListener('click', e => {
							const id = e.target.closest('.patient__card').dataset.id
							new Modal()
								.title('Редактировать')
								.elem(
									new Form('Заполните форму')
										.input('text', 'text')
										.input('text', 'text')
										.input('text', 'text')
										.input('text', 'text')
										.input('text', 'text')
										.build()
								)
								.ok(() => console.log('kek'))
								.build()
						})
						.children(new Icon('fas fa-edit'))
				)
				.children(
					new Button('btn--icon')
						.eventListener('click', async e => {
							const api = new Api()
							await api.login(
								localStorage.getItem('email'),
								localStorage.getItem('password')
							)
							const card = e.target.closest('.patient__card')
							await api.removeCard(card.dataset.id)
							const cards = await api.getAllCard()
							new Redirect(ControlPage(cards)).redirect()
						})
						.children(new Icon('fas fa-trash'))
				),
			new ElementBuild()
				.tag('div')
				.options({ className: 'patient-card__content' })
				.children(...data),
			new ElementBuild()
				.tag('div')
				.options({ className: 'patient-card__options' })
				.children(new DropDown('1', ...additionlInfo)),
		]
	}
}
