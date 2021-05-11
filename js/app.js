// import { ControlPage } from './pages/control/Cards.js'
import { HomePage } from './pages/home/Home.js'
import { ControlPage } from './pages/control/Cards.js'
import { Api } from './api.js'

document.addEventListener('DOMContentLoaded', async () => {
	const api = new Api()
	const token = localStorage.getItem('token')
	if (token) {
		await api.getAllCard()
		ControlPage().build()
		return
	}
	HomePage().build()
})
