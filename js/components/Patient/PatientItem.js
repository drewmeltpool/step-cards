import { ElementBuild } from '../../components/Constructor/elementBuild.js'
import { Button, Icon } from '../../components/Constructor/elements.js'
import { Api } from '../../api/api.js'
import { ControlPage } from '../../pages/control/controlPage.js'
import { Redirect } from '../../redirect/redirect.js'

export class PatientItem {
	constructor(obj) {
		const show = ['doctor', 'patient']
		const { id } = obj
		const data = show.map(key =>
			new ElementBuild()
				.tag('p')
				.options({ textContent: `${key}: ${obj[key]}` })
		)
		return new ElementBuild()
			.tag('div')
			.options({
				className: 'patient__inner-card',
				dataset: { name: 'id', value: id },
			})
			.children(
				new ElementBuild()
					.tag('div')
					.options({ className: 'patient-card__options' })
					.children(
						new Button('btn--icon')
							.eventListener('click', e => {
								const card = e.target.closest('.patient__inner-card')
								console.log('fa-edit', card.dataset.id)
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
								const card = e.target.closest('.patient__inner-card')
								await api.removeCard(card.dataset.id)
								const cards = await api.getAllCard()
								// card.closest('.patient__card').remove()
								new Redirect(ControlPage(cards)).redirect()
								// console.log(ControlPage(cards))b
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
					.children(
						new Button('btn--icon').children(new Icon('fas fa-chevron-down'))
					)
			)
	}
}
