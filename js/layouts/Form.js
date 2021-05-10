import { Element } from '../Constructor/Element.js'
import { Button, TextArea } from '../Constructor/Template.js'
import { Select } from './DropDown.js'
import { ignoreKey } from '../DOM/dom.js'

export class newForm {
	constructor(obj) {
		this.formWrapper = new Element()
			.tag('div')
			.options({ className: 'form-wrapper' })

		this.form = new Element()
			.tag('form')
			.options({ className: 'form' })
			.options(ignoreKey(obj, 'options', 'title'))
			.children(
				new Element()
					.tag('h3')
					.options({ className: 'form__title', ...obj.title }),
			)

		Object.keys(obj.options).forEach(key => this[key](obj.options[key]))

		return this.build()
	}

	input(obj) {
		this.form.children(
			new Element().tag('input').options({ className: 'form__input', ...obj }),
		)
	}

	select(obj) {
		this.form.children(new Select({ className: 'form__select', ...obj }))
	}

	button(obj) {
		this.form.children(
			new Button({ className: 'btn btn--default form__submit', ...obj }),
		)
	}

	textArea(obj) {
		this.form.children(
			new TextArea().options({ className: 'form__textarea', ...obj }),
		)
	}

	submit(cb) {
		this.form.eventListener('submit', e => {
			e.preventDefault()
			cb()
		})
	}

	build() {
		return this.formWrapper.children(this.form)
	}
}
