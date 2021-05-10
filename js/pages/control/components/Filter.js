import { Api } from '../../../api.js'
import { Element } from '../../../Constructor/Element.js'
import { Form } from '../../../layouts/Form.js'
import { getInputValue } from '../../../DOM/dom.js'
import { PriorityList, DoctorList } from '../../../components/Doctor/MedInfo.js'
import { emptyList } from '../../../layouts/Info.js'

export class Filter {
	constructor() {
		return new Element()
			.tag('aside')
			.options({ className: 'filter container' })
			.children(
				new Form('', { className: 'filter-form', id: 'test' })
					.input({
						className: 'filter-input',
						placeholder: 'Поиск',
						name: 'title',
						id: 'filter-input',
					})
					.select({
						className: 'filter-select',
						id: 'filter-doctor',
						name: 'doctor',
						options: [
							{ textContent: 'Все', value: 'all' },
							...new DoctorList(),
						],
					})
					.select({
						className: 'filter-select',
						id: 'filter-priority',
						name: 'priority',
						options: [
							{ textContent: 'Все', value: 'all' },
							...new PriorityList(),
						],
					})
					.button({
						className: 'btn filter-btn',
						innerHTML: '<i class="fas fa-search"></i>',
					})
					.submit(async () => {
						const titleValue = getInputValue('#filter-input')
						const doctor = getInputValue('#filter-doctor')
						const priority = getInputValue('#filter-priority')
						const api = new Api()
						api.setToken(localStorage.getItem('token'))
						const allCards = await api.getAllCard()
						const res = allCards
							.filter(card => card.goal.includes(titleValue))
							.filter(
								card =>
									doctor === card.doctor.specialization || doctor === 'all',
							)
							.filter(card => priority === card.priority || priority === 'all')
							.map(i => i.id)

						document.querySelector('.info')?.remove()
						document.querySelector('.patient__list').classList.remove('hide')
						document.querySelectorAll('.patient__card').forEach(card => {
							card.classList.remove('hide')
						})
						document.querySelectorAll('.patient__card').forEach(card => {
							const id = +card.dataset.id
							if (!res.some(item => item === id)) {
								card.classList.add('hide')
							}
						})
						if (!res.length) {
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
