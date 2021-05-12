// import { ControlPage } from './pages/control/Cards.js'
import { HomePage } from './pages/home/Home.js'
import { ControlPage } from './pages/control/Cards.js'
import { Api } from './api.js'

document.addEventListener('DOMContentLoaded', async () => {
	if (localStorage.getItem('token')) {
		const api = new Api()
		await api.getAllCard()
		ControlPage().build()
		return
	}
	HomePage().build()
})

document.addEventListener('click', e => {
	if (e.target.closest('.dropdown')) return
	const dropdownList = document.querySelectorAll('.dropdown__open')
	if (dropdownList.length) {
		dropdownList.forEach(dropdown =>
			dropdown.classList.remove('dropdown__open'),
		)
	}
})
