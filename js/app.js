import { ControlPage } from './pages/control/controlPage.js'
import { HomePage } from './pages/home/homePage.js'
import { Api } from './api/api.js'

document.addEventListener('DOMContentLoaded', async () => {
	const api = new Api()
	const token = localStorage.getItem('token')
	if (token) {
		const cards = await api.getAllCard()
		localStorage.setItem('cards', JSON.stringify(cards))
		ControlPage().build()
	} else {
		HomePage().build()
	}
})
