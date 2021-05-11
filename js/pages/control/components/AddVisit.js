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
				new Select({
					className: 'select visit__dropdown',
					options: [
						{
							textContent: 'Выбрать врача',
							disabled: true,
							selected: true,
							hidden: true,
						},
						{ value: 'therapist', textContent: 'Терапевт' },
						{ value: 'cardiologist', textContent: 'Кардиолог' },
						{ value: 'dentist', textContent: 'Стоматолог' },
					],
				}).eventListener('change', () => {
					const formWrapper = document.querySelector('.visit__form-wrapper')
					formWrapper.innerHTML = ''
					new VisitForm(getInputValue('.visit__dropdown'))
						.parent(formWrapper)
						.render()
				}),
			)
			.children(
				new Element().tag('div').options({ className: 'visit__form-wrapper' }),
			)
	}
}
