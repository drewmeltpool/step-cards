import { DropDown } from '../../../components/layouts/DropDown.js'
import { Form } from '../../../components/layouts/Form.js'
import { Element } from '../../../components/Constructor/Element.js'

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
						const visitWrapper = document.querySelector('.visit-wrapper')
						const allForms = visitWrapper.querySelectorAll('.form-wrapper')
						allForms.forEach(form => {
							form.style.display = 'none'
						})
						const select = document.querySelector('.visit__dropdown').value
						const form = document.querySelector(`#${select}`)
						form.style.display = 'block'
					}),
			)
			.children(
				new Form('Терапевт')
					.input('text', 'visitPurpose')
					.textArea('description')
					.select(
						{ value: 'High', textContent: 'Срочный' },
						{
							value: 'Medium',
							textContent: 'Средне-срочный',
						},
						{ value: 'Low', textContent: 'Не срочный' },
					)
					.input('text', 'visitPurpose')
					.build()
					.options({ id: 'therapist' })
					.css({ display: 'none' }),
			)
			.children(
				new Form('Кардиолог')
					.build()
					.options({ id: 'cardiologist' })
					.css({ display: 'none' }),
			)
			.children(
				new Form('Стоматолог')
					.build()
					.options({ id: 'dentist' })
					.css({ display: 'none' }),
			)
	}
}
