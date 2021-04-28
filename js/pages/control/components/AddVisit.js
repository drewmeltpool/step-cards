import { DropDown } from '../../../components/layouts/DropDown.js'
import { Element } from '../../../components/Constructor/Element.js'
import { VisitForm } from '../../../components/Doctor/VisitForm.js'

export class AddVisit {
	constructor() {
		return new Element()
			.tag('div')
			.options({ className: 'visit-wrapper' })
			.children(
				new DropDown({ className: 'visit__dropdown' })
					.option({
						textContent: 'Выбрать врача',
						disabled: true,
						selected: true,
						hidden: true,
					})
					.option({ value: 'therapist', textContent: 'Терапевт' })
					.option({ value: 'cardiologist', textContent: 'Кардиолог' })
					.option({ value: 'dentist', textContent: 'Стоматолог' })
					.build()
					.eventListener('change', () => {
						const select = document.querySelector('.visit__dropdown').value
						const formWrapper = document.querySelector('.visit__form-wrapper')
						formWrapper.innerHTML = ''
						new VisitForm(select).create().parent(formWrapper).render()
					}),
			)
			.children(
				new Element().tag('div').options({ className: 'visit__form-wrapper' }),
			)
	}
}
