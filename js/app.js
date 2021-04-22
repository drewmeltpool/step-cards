import { ControlPage } from './pages/control/controlPage.js'
import { HomePage } from './pages/home/homePage.js'
import { Api } from './api/Api.js'

document.addEventListener('DOMContentLoaded', async () => {
	const email = localStorage.getItem('email')
	const password = localStorage.getItem('password')

	if ((email, password)) {
		const api = new Api()
		await api.login(email, password)
		const cards = await api.getAllCard()
		ControlPage(cards).render()
	} else {
		HomePage.render()
	}
})

// import { Api } from './api/api.js'

// const api = new Api()

// const email = 'drewmelt132@gmail.com'
// const password = '5529245'

// const card = {
// 	id: 1,
// 	title: 'Визит к кардиологу',
// 	description: 'Новое описание визита',
// 	doctor: 'Cardiologist',
// 	bp: '24',
// 	age: 23,
// 	weight: 70,
// }

// await api.login(email, password)
// // const find = await api.getCard(14539)
// const cards = await api.getAllCard()

// console.log(find)
