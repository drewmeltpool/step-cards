import { Api } from '../../api/api.js'
import { Redirect } from '../../redirect/redirect.js'
import { ControlPage } from '../../pages/control/Cards.js'
import { Element } from '../Constructor/Element.js'
import { PatientItem } from './PatientItem.js'

export class PatientList {
	constructor() {
		this.list = document.querySelector('.patient__list')
	}

	create(data) {
		const patients = data.map(patient => new PatientItem().create(patient))
		return new Element()
			.tag('div')
			.options({ className: 'patient__list' })
			.children(...patients)
	}

	async add(data) {
		const api = new Api()
		api.setToken(localStorage.getItem('token'))
		const card = await api.addCard(data)
		const cards = localStorage.getItem('cards')
		const cardsParse = JSON.parse(cards)
		const ans = JSON.stringify([...JSON.parse(cards), card])
		localStorage.setItem('cards', ans)
		if (!cardsParse.length) {
			new Redirect(ControlPage()).redirect()
			return
		}
		new PatientItem().create(card).parent(this.list).render()
	}

	async delete(id) {
		const api = new Api()
		api.setToken(localStorage.getItem('token'))
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
		this.list.querySelector(`[data-id="${id}"]`).remove()
	}
}
