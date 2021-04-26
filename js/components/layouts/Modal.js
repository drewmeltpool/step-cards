import { Element } from '../Constructor/Element.js'
import { Button, Icon } from '../Constructor/Template.js'

const root = document.querySelector('#root')

export class Modal {
	constructor() {
		this.header = new Element()
			.tag('div')
			.options({ className: 'modal__header' })
			.children(
				new Element().tag('h4').options({
					className: 'modal__title',
				})
			)
			.children(
				new Icon('fas fa-times modal__close').eventListener('click', () => {
					this.destroy()
				})
			)

		this.body = new Element().tag('div').options({ className: 'modal__body' })

		this.footer = new Element()
			.tag('div')
			.options({ className: 'modal__footer' })
			.children(
				new Button('modal__cancel', 'Отмена').eventListener('click', () => {
					this.destroy()
				})
			)

		this.content = new Element()
			.tag('div')
			.options({ className: 'modal__content' })

		this.modalInner = new Element().tag('div').options({ className: 'modal' })

		this.modal = new Element()
			.parent(root)
			.tag('div')
			.options({ className: 'modal-wrapper', id: 'modal' })
			.eventListener('click', e => {
				if (e.target.classList.contains('modal-wrapper')) {
					this.destroy()
				}
			})
	}

	title(textContent) {
		this.header = new Element()
			.tag('div')
			.options({ className: 'modal__header' })
			.children(
				new Element().tag('h4').options({
					className: 'modal__title',
					textContent,
				})
			)
			.children(
				new Icon('fas fa-times modal__close').eventListener('click', () => {
					this.destroy()
				})
			)

		return this
	}

	text(textContent) {
		this.body.children(
			new Element().tag('p').options({ className: 'modal__text', textContent })
		)
		return this
	}

	elem(item) {
		this.body.children(item)
		return this
	}

	ok(cb) {
		this.footer = new Element()
			.tag('div')
			.options({ className: 'modal__footer' })
			.children(
				new Button('modal__ok', 'Ok').eventListener('click', () => {
					cb()
					this.destroy()
				})
			)
			.children(
				new Button('modal__cancel', 'Отмена').eventListener('click', () => {
					this.destroy()
				})
			)

		return this
	}

	build() {
		document.body.classList.add('open-modal')
		this.modal
			.children(
				this.modalInner.children(
					this.content
						.children(this.header)
						.children(this.body)
						.children(this.footer)
				)
			)
			.render()
	}

	destroy() {
		const modals = document.querySelectorAll('#modal')
		const last = document.querySelectorAll('#modal').length - 1
		document.body.classList.remove('open-modal')
		modals[last].remove()
	}
}
