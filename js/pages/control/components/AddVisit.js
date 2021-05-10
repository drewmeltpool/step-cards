import { Select } from '../../../layouts/DropDown.js'
import { Element } from '../../../Constructor/Element.js'
import { VisitForm } from '../../../components/Doctor/VisitDialog.js'
import { getInputValue } from '../../../DOM/dom.js'

export class AddVisit {
	constructor() {
		return new Element()
			.tag('div')
			.options({ className: 'visit-wrapper' })
			.children(
				new Select({ className: 'visit__dropdown' })
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
						const formWrapper = document.querySelector('.visit__form-wrapper')
						formWrapper.innerHTML = ''
						new VisitForm(getInputValue('.visit__dropdown'))
							.create()
							.parent(formWrapper)
							.render()
					}),
			)
			.children(
				new Element().tag('div').options({ className: 'visit__form-wrapper' }),
			)
	}
}
