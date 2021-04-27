import { Element } from '../Constructor/Element.js'
import { DropDown } from './DropDown.js'

export class Form {
	constructor(textContent = 'Form') {
		this.formWrapper = new Element()
			.tag('div')
			.options({ className: 'form-wrapper' })

		this.form = new Element()
			.tag('form')
			.options({ className: 'form' })
			.children(
				new Element()
					.tag('h3')
					.options({ className: 'form__title', textContent }),
			)
	}

	input(obj) {
		this.form.children(
			new Element()
				.tag('input')
				.options({ className: 'form__input' })
				.options(obj),
		)
		return this
	}

	select(selectObj, ...objs) {
		const dropDown = new DropDown()
		objs.forEach(obj => {
			dropDown.option(obj)
		})
		this.form.children(
			dropDown
				.build()
				.options({ className: 'form__select' })
				.options(selectObj),
		)
		return this
	}

	button(text) {
		this.form.children(
			new Element().tag('button').options({
				className: 'form__submit btn--default',
				textContent: text,
				type: 'submit',
			}),
		)
		return this
	}

	textArea(obj) {
		this.form.children(
			new Element()
				.tag('textarea')
				.options({
					className: 'form__textarea',
				})
				.options(obj),
		)
		return this
	}

	build() {
		return this.formWrapper.children(this.form)
	}

	submit(cb) {
		this.form.eventListener('submit', e => {
			e.preventDefault()
			cb()
		})
		return this
	}
}
