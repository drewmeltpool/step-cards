import { Element } from '../Constructor/Element.js'
import { Button, Icon } from '../Constructor/Template.js'
import { destroyModal } from '../DOM/dom.js'

const root = document.querySelector('#root')

export class Modal {
	constructor(obj) {
		this.header = new Element()
			.tag('div')
			.options({ className: 'modal__header' })
			.children(
				new Element().tag('h4').options({
					className: 'modal__title',
					...obj.title,
				}),
			)
			.children(
				new Icon('fas fa-times modal__close').eventListener('click', () => {
					this.destroy()
				}),
			)

		this.body = new Element()
			.tag('div')
			.options({ className: 'modal__body' })
			.children(obj.content)

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

		this.footer = new Element()
			.tag('div')
			.options({ className: 'modal__footer' })
			.children(
				new Button({
					className: 'btn modal__cancel',
					textContent: 'Отмена',
				}).eventListener('click', () => {
					this.destroy()
				}),
			)
		if (obj.ok) {
			this.ok(obj.ok)
		}

		this.build()
	}

	ok(cb) {
		this.footer = new Element()
			.tag('div')
			.options({ className: 'modal__footer' })
			.children(
				new Button({
					className: 'btn modal__ok',
					textContent: 'Ок',
				}).eventListener('click', () => {
					cb()
					if (document.querySelector('.modal-wrapper')) this.destroy()
				}),
			)
			.children(
				new Button({
					className: 'btn modal__cancel',
					textContent: 'Отмена',
				}).eventListener('click', () => {
					this.destroy()
				}),
			)
	}

	build() {
		document.body.classList.add('open-modal')
		return this.modal
			.children(
				this.modalInner.children(
					this.content
						.children(this.header)
						.children(this.body)
						.children(this.footer),
				),
			)
			.render()
	}

	destroy() {
		destroyModal()
	}
}
