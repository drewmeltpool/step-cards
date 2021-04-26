import { ControlPage } from './pages/control/controlPage.js'
import { HomePage } from './pages/home/homePage.js'
import { Api } from './api/api.js'
import {
	VisitDentist,
	VisitCardiologist,
	VisitTherapist,
} from './components/Doctor/Visit.js'
import { VisitForm } from './components/Doctor/VisitForm.js'

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

	const cardiolog = new VisitCardiologist(1, 2, 3, 4, 5, 6, 7, 8)
	const dentist = new VisitDentist(1, 2, 3, 4, 5)
	const therapist = new VisitTherapist(1, 2, 3, 4, 5)
	// const cardiolog = new VisitCardiologist(1, 2, 3, 4, 5)
	console.log(new VisitForm(dentist).create())
	console.log(new VisitForm(cardiolog).create())
	console.log(new VisitForm(therapist).create())
})
