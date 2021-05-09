import { Element } from '../../../components/Constructor/Element.js'
import { Api } from '../../../api/api.js'
import { Form } from '../../../components/layouts/Form.js'
import { getInputValue } from '../../../components/DOM/dom.js'
import { Redirect } from '../../../redirect/redirect.js'
import { ControlPage } from '../Cards.js'
import { PriorityList, DoctorList } from '../../../components/Doctor/MedInfo.js'
import { emptyList } from '../../../components/layouts/Info.js'

export class Filter {
	constructor() {
		return new Element()
			.tag('div')
			.options({ className: 'filter container' })
			.children(
				new Form('', { className: 'filter-form' })
					.input({
						className: 'filter-input',
						placeholder: 'Поиск',
						id: 'filter-input',
					})
					.select(
						{ className: 'filter-select', id: 'filter-doctor' },
						{ textContent: 'Все', value: 'all' },
						...new DoctorList(),
					)
					.select(
						{ className: 'filter-select', id: 'filter-priority' },
						{ textContent: 'Все', value: 'all' },
						...new PriorityList(),
					)
					.button({ textContent: 'Поиск', className: 'btn filter-btn' })
					.submit(async () => {
						const titleValue = getInputValue('#filter-input')
						const doctor = getInputValue('#filter-doctor')
						const priority = getInputValue('#filter-priority')
						const api = new Api()
						api.setToken(localStorage.getItem('token'))
						const allCards = await api.getAllCard()

						const filterGoal = allCards.filter(card =>
							card.goal.includes(titleValue),
						)
						const filterDoctor = filterGoal.filter(
							card => doctor === card.doctor.specialization || doctor === 'all',
						)
						const filteredPriority = filterDoctor.filter(
							card => priority === card.priority || priority === 'all',
						)
						const filtered = filteredPriority.map(i => i.id)

						document.querySelector('.info')?.remove()
						document.querySelector('.patient__list').classList.remove('hide')
						document.querySelectorAll('.patient__card').forEach(card => {
							card.classList.remove('hide')
						})
						document.querySelectorAll('.patient__card').forEach(card => {
							const id = +card.dataset.id
							if (!filtered.some(item => item === id)) {
								card.classList.add('hide')
							}
						})
						if (!filtered.length) {
							document.querySelector('.patient__list').classList.add('hide')
							new emptyList()
								.parent(document.querySelector('main .container'))
								.render()
						}
					})
					.build(),
			)
	}
}
