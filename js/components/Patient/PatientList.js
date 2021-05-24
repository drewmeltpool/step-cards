import { Api } from '../../api.js'
import { Redirect } from '../../redirect.js'
import { ControlPage } from '../../pages/control/Cards.js'
import { Element } from '../../Constructor/Element.js'
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
		const card = await api.addCard(data)
		const cardsParse = JSON.parse(localStorage.getItem('cards'))
		const ans = JSON.stringify([...cardsParse, card])
		localStorage.setItem('cards', ans)
		new Redirect(ControlPage()).redirect()
	}

	async edit(data, id) {
		const api = new Api()
		const card = await api.editCard(data, id)
		const ind = [...document.querySelectorAll('.patient__card')].findIndex(
			item => item.dataset.id === id,
		)
		const cards = JSON.parse(localStorage.getItem('cards'))
		cards.splice(ind, 1, card)
		localStorage.setItem('cards', JSON.stringify(cards))
		const content = [...new PatientItem().create(card).build().children]
		document.querySelectorAll('.patient__card')[ind].innerHTML = ''
		content.forEach(item => {
			document.querySelectorAll('.patient__card')[ind].append(item)
		})
	}

	async delete(id) {
		const api = new Api()
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
