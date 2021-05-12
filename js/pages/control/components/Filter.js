import { Api } from '../../../api.js'
import { Element } from '../../../Constructor/Element.js'
import { Form } from '../../../layouts/Form.js'
import { getInputValue } from '../../../DOM/dom.js'
import { formUtils } from '../../../utils/formData.js'
import { emptyList } from '../../../layouts/Info.js'
import { PatientList } from '../../../components/Patient/PatientList.js'

export class Filter {
	constructor() {
		return new Element()
			.tag('aside')
			.options({ className: 'filter container' })
			.children(
				new Form({
					...formUtils.filter,
					button: { className: 'btn filter-btn', textContent: 'Поиск' },
					submit: async () => {
						const doctor = getInputValue('#filter-doctor')
						const priority = getInputValue('#filter-priority')
						const titleValue = getInputValue('#filter-input')
						const api = new Api()
						const allCards = await api.getAllCard()
						const list = document.querySelector('.patient__list')

						const content = [
							...new PatientList().create(allCards).build().children,
						]
						list.innerHTML = ''
						content.forEach(card => list.append(card))
						const res = allCards
							.filter(c => c.goal.includes(titleValue))
							.filter(c => doctor === c.specialization || doctor === 'all')
							.filter(c => priority === c.priority || priority === 'all')
							.map(i => i.id)
						const info = document.querySelector('.info')
						const cards = document.querySelectorAll('.patient__card')
						if (!res.length) {
							if (!info) {
								new emptyList()
									.parent(document.querySelector('main .container'))
									.render()
							}
							list.classList.add('hide')
						} else {
							if (info) {
								info.remove()
							}
						}

						list.classList.remove('hide')
						cards.forEach(card => card.classList.remove('hide'))
						cards.forEach(card => {
							!res.some(item => item === +card.dataset.id) &&
								card.classList.add('hide')
						})
					},
				}),
			)
	}
}
