import { VisitCardiologist } from './components/Doctor/Visit.js'
import { ControlPage } from './pages/control/Cards.js'
import { HomePage } from './pages/home/Home.js'
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

	console.log(new VisitCardiologist())
})
