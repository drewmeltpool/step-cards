import { Select } from '../../../layouts/DropDown.js'
import { Element } from '../../../Constructor/Element.js'
import { VisitDialog } from '../../../components/Doctor/VisitDialog.js'
import { getInputValue } from '../../../DOM/dom.js'
import { medData } from '../../../utils/medData.js'

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
						...medData.doctors,
					],
				}).eventListener('change', () => {
					const formWrapper = document.querySelector('.visit__form-wrapper')
					formWrapper.innerHTML = ''
					new VisitDialog(getInputValue('.visit__dropdown'))
						.createForm()
						.parent(formWrapper)
						.render()
				}),
			)
			.children(
				new Element().tag('div').options({ className: 'visit__form-wrapper' }),
			)
	}
}
