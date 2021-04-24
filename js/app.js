import { ControlPage } from './pages/control/controlPage.js'
import { HomePage } from './pages/home/homePage.js'
import { Api } from './api/Api.js'

// const card = {
// 	description: 'Новое описание визита',
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
// }

document.addEventListener('DOMContentLoaded', async () => {
	const email = localStorage.getItem('email')
	const password = localStorage.getItem('password')

	if ((email, password)) {
		const api = new Api()
		await api.login(email, password)
		const cards = await api.getAllCard()
		// const id = cards.forEach(async card => await api.removeCard(card.id))
		// const cardes = await api.getAllCard()
		// const newCards = cards.map(card => {
		// 	const { patient, doctor } = card
		// 	return { patient, doctor }
		// })
		await ControlPage(cards).render()
	} else {
		HomePage.render()
	}
})
