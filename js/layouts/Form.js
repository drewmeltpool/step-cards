import { ElementBuild } from '../components/Constructor/elementBuild.js'

export class Form {
	constructor(textContent = 'Form') {
		this.formWrapper = new ElementBuild()
			.tag('div')
			.options({ className: 'form-wrapper' })

		this.form = new ElementBuild()
			.tag('form')
			.options({ className: 'form' })
			.children(
				new ElementBuild()
					.tag('h3')
					.options({ className: 'form__title', textContent })
			)
	}

	input(type, id) {
		this.form.children(
			new ElementBuild()
				.tag('input')
				.options({ className: 'form__input', type: type, id })
		)
		return this
	}

	button(text) {
		this.form.children(
			new ElementBuild().tag('button').options({
				className: 'form__submit btn--default',
				textContent: text,
				type: 'submit',
			})
		)
		return this
	}

	build() {
		return this.formWrapper.children(this.form)
	}

	submit(cb) {
		this.form.eventListener('submit', cb)
		return this
	}
}
