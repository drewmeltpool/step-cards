import { ControlPage } from './pages/control/Cards.js'
import { HomePage } from './pages/home/Home.js'
import { Api } from './api.js'

const form = {
	id: 'kek',
	title: {
		textContent: 'title',
	},
	options: {
		input: {
			name: 'doctor',
			id: 'js',
			placeholder: 'test',
		},
		select: {
			name: 'value',
			id: 'one',
			options: [
				{ value: '1', textContent: '1' },
				{ value: '2', textContent: '2' },
				{ value: '3', textContent: '3' },
			],
		},
		textArea: { name: 'description' },
		button: {
			textContent: 'dada',
		},
		submit: function () {
			const form = document.querySelector('#kek')
			console.log(getFormData(form))
			destroyModal()
		},
	},
}

const modal = {
	title: { textContent: 'kek' },
	content: new newForm(form),
	ok: () => {
		console.log(123123)
	},
}

document.addEventListener('DOMContentLoaded', async () => {
	const api = new Api()
	const token = localStorage.getItem('token')
	if (token) {
		const cards = await api.getAllCard()
		localStorage.setItem('cards', JSON.stringify(cards))
		ControlPage().build()
		return
	}
	HomePage().build()
})
